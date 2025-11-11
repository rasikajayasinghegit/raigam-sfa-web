import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/loading-list/view-loading-list')({
  component: () => <div className='p-4'>Agency Module - Loading List - View Loading List</div>,
})

