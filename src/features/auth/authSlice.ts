import { api } from '@/lib/axios'
import { clearAllTokens, getAccessToken, setAccessToken } from '@/lib/token'
import type { AppRole, AuthUser, SubRole } from '@/types/roles'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { z } from 'zod'
import type { AuthState } from './authTypes'

//  validation
const LoginSchema = z.object({
  userName: z.string(),
  password: z.string().min(1),
})

//  initial
const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: undefined,
}

//  login
export const login = createAsyncThunk<AuthUser, { userName: string; password: string }>(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    const parsed = LoginSchema.safeParse(payload)
    if (!parsed.success) return rejectWithValue('Invalid input')

    const { data } = await api.post('/api/v1/auth/login', payload)
    if (data.code !== 200) return rejectWithValue(data.message)

    const p = data.payload

    setAccessToken(p.token) // ✅ access token only

    const user: AuthUser = {
      userId: p.userId,
      userName: p.userName,
      personalName: p.personalName,
      role: p.role as AppRole,
      subRole: p.subRole as SubRole,
      roleId: p.roleId,
      subRoleId: p.subRoleId,
      userTypeId: p.userTypeId,
      userType: p.userType,
    }

    localStorage.setItem('raigam.sfa.user', JSON.stringify(user))

    return user
  },
)

//  restore on reload
export const hydrateFromStorage = createAsyncThunk<AuthUser | null>('auth/hydrate', async () => {
  const raw = localStorage.getItem('raigam.sfa.user')
  const token = getAccessToken()

  if (!raw || !token) return null
  return JSON.parse(raw)
})

//  logout
export const logout = createAsyncThunk('auth/logout', async () => {
  clearAllTokens()
  localStorage.removeItem('raigam.sfa.user')
})

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload
    },
  },
  extraReducers: (b) => {
    b.addCase(login.pending, (s) => {
      s.status = 'loading'
      s.error = undefined
    })
      .addCase(login.fulfilled, (s, a) => {
        s.status = 'authenticated'
        s.user = a.payload
      })
      .addCase(login.rejected, (s, a) => {
        s.status = 'error'
        s.error = String(a.payload ?? a.error?.message)
      })
      .addCase(hydrateFromStorage.fulfilled, (s, a) => {
        if (a.payload) {
          s.status = 'authenticated'
          s.user = a.payload
        }
      })
      .addCase(logout.fulfilled, (s) => {
        s.status = 'idle'
        s.user = null
      })
  },
})

export const { setUser } = slice.actions
export default slice.reducer
