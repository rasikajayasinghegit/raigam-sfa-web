import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/stock/add-stock')({
  component: () => <div className='p-4'>Agency Module - Stock - Add Stock</div>,
})

