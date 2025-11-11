import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/invoice/view-invoice')({
  component: () => <div className='p-4'>Agency Module - Invoice - View Invoice</div>,
})

