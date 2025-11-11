import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/heart-count')({
  component: () => <div className='p-4'>Heart Count</div>,
})

