import { useAppSelector } from '@/app/hooks'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function ProtectedRoute() {
  const user = useAppSelector((state) => state.auth.user)
  const loc = useLocation()

  if (!user) {
    return <Navigate to="/sign-in" replace state={{ from: loc }} />
  }

  return <Outlet />
}
