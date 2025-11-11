import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/invoice/manual-invoice')({
  component: () => <div className='p-4'>Agency Module - Invoice - Manual Invoice</div>,
})

