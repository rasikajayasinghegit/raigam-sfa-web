import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reports/achievement-category-wise')({
  component: () => <div className='p-4'>Reports - Achievement Category Wise</div>,
})

