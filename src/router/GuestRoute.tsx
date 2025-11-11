import { useAppSelector } from '@/app/hooks'
import { Navigate, Outlet } from 'react-router-dom'

export default function GuestRoute() {
  const user = useAppSelector((state) => state.auth.user)
  if (user) return <Navigate to="/" replace />
  return <Outlet />
}
