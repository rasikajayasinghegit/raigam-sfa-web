import type { UserRole } from "../types/auth";

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  "System Admin": 100,
  "Top Management": 90,
  "Senior Manager Sales": 80,
  "Senior Manager Company": 70,
  "Manager Sales": 60,
  "Executive Sales": 50,
  "Executive Company": 40,
  "Operation Sales": 30
};

export const isRoleAuthorized = (
  userRole: UserRole | undefined,
  allowedRoles?: UserRole[]
) => {
  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }
  if (!userRole) {
    return false;
  }
  return allowedRoles.includes(userRole);
};
