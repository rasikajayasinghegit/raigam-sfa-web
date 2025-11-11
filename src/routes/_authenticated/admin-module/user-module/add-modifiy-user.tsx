import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin-module/user-module/add-modifiy-user')({
  component: () => <div className='p-4'>Admin Module - User Module - Add/Modifiy User</div>,
})

