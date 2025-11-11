let accessTokenMemory = ''

const ACCESS_KEY = 'raigam.sfa.access'

// ------------------ ACCESS TOKEN ------------------

export function getAccessToken() {
  if (accessTokenMemory) return accessTokenMemory
  const t = localStorage.getItem(ACCESS_KEY) || ''
  accessTokenMemory = t
  return t
}

export function setAccessToken(token: string) {
  accessTokenMemory = token
  localStorage.setItem(ACCESS_KEY, token)
}

export function clearAccessToken() {
  accessTokenMemory = ''
  localStorage.removeItem(ACCESS_KEY)
}

// ------------------ REFRESH TOKEN (COOKIE) ------------------

export function setRefreshToken(token: string) {
  document.cookie = `raigam_refresh=${token}; path=/; SameSite=Lax; Secure`
}

export function getRefreshToken() {
  const match = document.cookie.match(/(?:^|; )raigam_refresh=([^;]*)/)
  return match ? match[1] : ''
}

export function clearRefreshToken() {
  document.cookie = 'raigam_refresh=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

// ------------------ CLEAR ALL ------------------

export function clearAllTokens() {
  clearAccessToken()
  clearRefreshToken()
}
