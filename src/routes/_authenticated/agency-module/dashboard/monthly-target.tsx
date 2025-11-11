import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/dashboard/monthly-target')({
  component: () => <div className='p-4'>Agency Module - Dashboard - Monthly Target</div>,
})

