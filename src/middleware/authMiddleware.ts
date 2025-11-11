import { logout } from '@/features/auth/authSlice'
import { getAccessToken } from '@/lib/token'
import type { Middleware } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode' // <-- named export, not default

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)
  try {
    const t = getAccessToken()
    if (t) {
      const decoded: any = jwtDecode(t)
      if (decoded?.exp && Date.now() / 1000 > decoded.exp + 5) {
        // Token definitely expired → log out (axios will also try refresh on 401)
        store.dispatch<any>(logout())
      }
    }
  } catch {
    // decoding failed → ignore; axios refresh flow will handle if needed
  }
  return result
}
