import { useAppSelector } from '@/app/hooks'
import type { AppRole, SubRole } from '@/types/roles'
import { Navigate } from 'react-router-dom'

export default function RequireRoles({
  allowRoles,
  allowSubRoles,
  children,
}: {
  allowRoles?: AppRole[]
  allowSubRoles?: SubRole[]
  children: React.ReactNode
}) {
  const user = useAppSelector((s) => s.auth.user)

  //  not logged in
  if (!user) return <Navigate to="/sign-in" replace />

  //  block by main role
  if (allowRoles && !allowRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  //  block by sub-role
  if (allowSubRoles && !allowSubRoles.includes(user.subRole)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <>{children}</>
}
