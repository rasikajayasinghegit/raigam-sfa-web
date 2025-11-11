import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin-module/operation/reverse-requests')({
  component: () => <div className='p-4'>Admin Module - Operation - Reverse Requests</div>,
})

