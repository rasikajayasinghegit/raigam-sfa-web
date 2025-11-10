export type UserRole =
  | "System Admin"
  | "Top Management"
  | "Senior Manager Sales"
  | "Senior Manager Company"
  | "Manager Sales"
  | "Executive Sales"
  | "Executive Company"
  | "Operation Sales";

export type UserSubRole =
  | "Admin"
  | "IT"
  | "MD"
  | "DGM"
  | "GM"
  | "DF"
  | "Channel Head"
  | "Sub channel head"
  | "Sales"
  | "CCU"
  | "Finance"
  | "Internal Audit"
  | "Brand"
  | "Regional Sales manager"
  | "Area Sales Manager"
  | "Area Sales Executive"
  | "Rep"
  | "Agent";

export interface AuthPayload {
  token: string;
  refreshToken?: string;
  userId: number;
  roleId: number;
  role: UserRole;
  subRoleId: number;
  subRole: UserSubRole | string;
  userTypeId: number;
  userType: string;
  rangeId: number;
  range: string;
  areaIds: number[];
  territoryId: number;
  territoryName: string;
  distributorId: number;
  distributorName: string;
  userAgencyId: number;
  agencyTerritoryId: number;
  agencyWarehouseId: number;
  agencyCode: number;
  agencyName: string;
  userName: string;
  personalName: string;
  gpsStatus: boolean;
  serverTime: string;
}

export interface AuthResponse {
  code: number;
  message: string;
  payload: AuthPayload;
}

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: AuthPayload | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
