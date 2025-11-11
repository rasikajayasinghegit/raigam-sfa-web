//  All main roles returned from backend
export type AppRole =
  | 'System Admin'
  | 'Top Management'
  | 'Senior Manager Sales'
  | 'Senior Manager Company'
  | 'Manager Sales'
  | 'Executive Sales'
  | 'Executive Company'
  | 'Operation Sales'
  | string

//  All sub-roles returned from backend
export type SubRole =
  | 'Admin'
  | 'IT'
  | 'MD'
  | 'DGM'
  | 'GM'
  | 'DF'
  | 'Channel Head'
  | 'Sub channel head'
  | 'Sales'
  | 'CCU'
  | 'Finance'
  | 'Internal Audit'
  | 'Brand'
  | 'Regional Sales manager'
  | 'Area Sales Manager'
  | 'Area Sales Executive'
  | 'Rep'
  | 'Agent'
  | string

export interface AuthUser {
  userId: number
  userName: string
  personalName: string
  role: AppRole
  subRole: SubRole
  roleId: number
  subRoleId: number
  userTypeId: number
  userType: string
}
