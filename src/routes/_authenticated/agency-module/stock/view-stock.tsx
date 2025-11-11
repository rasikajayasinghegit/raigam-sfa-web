import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/stock/view-stock')({
  component: () => <div className='p-4'>Agency Module - Stock - View Stock</div>,
})

