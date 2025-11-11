import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-operations/working-day')({
  component: () => <div className='p-4'>Sales Operations - Working Day</div>,
})

