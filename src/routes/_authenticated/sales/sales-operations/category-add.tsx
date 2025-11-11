import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-operations/category-add')({
  component: () => <div className='p-4'>Sales Operations - Category Add</div>,
})

