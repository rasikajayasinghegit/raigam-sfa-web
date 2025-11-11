import { getCookie, setCookie, removeCookie } from '@/lib/cookies'

const REFRESH_COOKIE = 'refresh_token'

let accessToken: string | '' = ''

export function getAccessToken() {
  return accessToken
}

export function setAccessToken(token: string) {
  accessToken = token || ''
}

export function clearAccessToken() {
  accessToken = ''
}

export function getRefreshToken(): string | undefined {
  return getCookie(REFRESH_COOKIE)
}

export function setRefreshToken(token: string, maxAgeMs: number) {
  // Best-effort cookie; server-set httpOnly cookie is preferable
  const maxAge = Math.floor(maxAgeMs / 1000)
  setCookie(REFRESH_COOKIE, token, maxAge)
}

export function clearRefreshToken() {
  removeCookie(REFRESH_COOKIE)
}

export function clearAllTokens() {
  clearAccessToken()
  clearRefreshToken()
}

