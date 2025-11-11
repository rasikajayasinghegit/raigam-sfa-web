import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/master-settings/final-geography-mapping')({
  component: () => <div className='p-4'>Final Geography Mapping</div>,
})

