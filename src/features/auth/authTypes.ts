export interface AuthUser {
  userId: number
  roleId: number
  role: string
  subRoleId: number
  subRole: string
  userTypeId: number
  userType: string
  userName: string
  personalName: string
}

export interface AuthState {
  user: AuthUser | null
  status: 'idle' | 'loading' | 'authenticated' | 'error'
  error?: string
}
