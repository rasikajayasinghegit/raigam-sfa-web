import { createFileRoute } from '@tanstack/react-router'
import { GeneralError } from '@/features/errors/general-error'

export const Route = createFileRoute('/errors/internal-server-error')({
  component: () => <GeneralError />,
})

