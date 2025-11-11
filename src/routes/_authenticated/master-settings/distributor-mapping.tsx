import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/master-settings/distributor-mapping')({
  component: () => <div className='p-4'>Distributor Mapping</div>,
})

