import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-details/market-return')({
  component: () => <div className='p-4'>Sales Details - Market Return</div>,
})

