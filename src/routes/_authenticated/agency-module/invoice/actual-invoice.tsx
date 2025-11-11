import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/invoice/actual-invoice')({
  component: () => <div className='p-4'>Agency Module - Invoice - Actual Invoice</div>,
})

