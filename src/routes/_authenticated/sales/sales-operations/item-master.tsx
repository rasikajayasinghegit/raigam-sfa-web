import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/sales-operations/item-master')({
  component: () => <div className='p-4'>Sales Operations - Item Master</div>,
})

