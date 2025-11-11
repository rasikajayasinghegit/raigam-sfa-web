import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reports/territory-wise-sales-report')({
  component: () => <div className='p-4'>Reports - Territory Wise Sales Report</div>,
})

