import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-operations/target')({
  component: () => <div className='p-4'>Sales Operations - Target</div>,
})

