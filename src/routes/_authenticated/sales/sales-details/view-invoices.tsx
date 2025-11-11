import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-details/view-invoices')({
  component: () => <div className='p-4'>Sales Details - View Invoices</div>,
})

