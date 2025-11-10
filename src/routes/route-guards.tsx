import { Navigate, Outlet } from "react-router-dom";
import type { UserRole } from "../types/auth";
import { useAuth } from "../providers/auth-provider";
import { isRoleAuthorized } from "../utils/roles";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!isRoleAuthorized(user?.role, allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
