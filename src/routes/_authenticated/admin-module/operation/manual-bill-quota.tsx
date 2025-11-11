import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin-module/operation/manual-bill-quota')({
  component: () => <div className='p-4'>Admin Module - Operation - Manual Bill Quota</div>,
})

