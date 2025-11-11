import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-operations/free-issue')({
  component: () => <div className='p-4'>Sales Operations - Free Issue</div>,
})

