import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/invoice/post-invoice')({
  component: () => <div className='p-4'>Agency Module - Invoice - Post Invoice</div>,
})

