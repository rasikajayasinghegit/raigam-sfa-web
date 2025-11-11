import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-details/stock')({
  component: () => <div className='p-4'>Sales Details - Stock</div>,
})

