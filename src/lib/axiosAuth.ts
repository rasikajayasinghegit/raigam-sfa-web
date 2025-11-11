import {
  clearAccessToken,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/lib/token'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const apiAuth = axios.create({
  baseURL,
  timeout: 30000,
})

let isRefreshing = false
let queue: Array<{ resolve: (token: string) => void; reject: (err: unknown) => void }> = []

function processQueue(error: unknown, token: string | null) {
  queue.forEach((p) => (token ? p.resolve(token) : p.reject(error)))
  queue = []
}

apiAuth.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken()
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiAuth.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const status = error.response?.status
    const original: any = error.config

    if (status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queue.push({
            resolve: (t) => {
              original.headers.Authorization = `Bearer ${t}`
              resolve(apiAuth(original))
            },
            reject,
          })
        })
      }

      original._retry = true
      isRefreshing = true

      try {
        const rt = getRefreshToken()
        if (!rt) throw new Error('No refresh token stored')

        const resp = await axios.post(`${baseURL}/api/v1/auth/refresh`, {
          refreshToken: rt,
        })

        const newAccess = resp.data?.payload?.token
        const newRefresh = resp.data?.payload?.refreshToken

        if (!newAccess) throw new Error('No access token returned')

        setAccessToken(newAccess)
        if (newRefresh) setRefreshToken(newRefresh)

        processQueue(null, newAccess)

        original.headers.Authorization = `Bearer ${newAccess}`
        return apiAuth(original)
      } catch (e) {
        processQueue(e, null)
        clearAccessToken()
        window.location.href = '/sign-in'
        return Promise.reject(e)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  },
)
