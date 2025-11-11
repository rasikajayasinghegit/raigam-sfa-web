import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reports/area-wise-sales-report')({
  component: () => <div className='p-4'>Reports - Area Wise Sales Report</div>,
})

