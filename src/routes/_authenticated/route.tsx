import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'
import { getAccessToken, getRefreshToken } from '@/services/tokenService'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const token = getAccessToken()
    const refresh = getRefreshToken()
    if (!token && !refresh) {
      throw redirect({ to: '/sign-in', search: { redirect: '/' } })
    }
  },
  component: AuthenticatedLayout,
})
