import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reports/item-summary-report')({
  component: () => <div className='p-4'>Reports - Item Summary Report</div>,
})

