import { getCookie, setCookie, setSessionCookie, removeCookie } from '@/lib/cookies'

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

export function setRefreshToken(token: string, maxAgeMs?: number, session: boolean = false) {
  // Best-effort cookie; server-set httpOnly cookie is preferable
  if (session) {
    setSessionCookie(REFRESH_COOKIE, token)
    return
  }
  const maxAge = maxAgeMs ? Math.floor(maxAgeMs / 1000) : undefined
  if (typeof maxAge === 'number') setCookie(REFRESH_COOKIE, token, maxAge)
  else setCookie(REFRESH_COOKIE, token)
}

export function clearRefreshToken() {
  removeCookie(REFRESH_COOKIE)
}

export function clearAllTokens() {
  clearAccessToken()
  clearRefreshToken()
}
