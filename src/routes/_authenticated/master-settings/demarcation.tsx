import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/master-settings/demarcation')({
  component: () => <div className='p-4'>Demarcation</div>,
})

