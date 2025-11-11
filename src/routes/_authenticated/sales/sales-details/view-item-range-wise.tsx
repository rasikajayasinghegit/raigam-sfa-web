import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-details/view-item-range-wise')({
  component: () => <div className='p-4'>Sales Details - View Item Range Wise</div>,
})

