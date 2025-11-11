import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reports/territory-wise-items-report')({
  component: () => <div className='p-4'>Reports - Territory Wise Items Report</div>,
})

