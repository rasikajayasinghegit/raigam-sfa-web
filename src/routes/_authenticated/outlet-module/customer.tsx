import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/outlet-module/customer')({
  component: () => <div className='p-4'>Outlet Module - Customer (Outlet)</div>,
})

