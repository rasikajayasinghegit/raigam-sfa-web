import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/stock/request-order')({
  component: () => <div className='p-4'>Agency Module - Stock - Request Order</div>,
})

