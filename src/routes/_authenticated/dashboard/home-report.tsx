import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/home-report')({
  component: () => <div className='p-4'>Home Report</div>,
})

