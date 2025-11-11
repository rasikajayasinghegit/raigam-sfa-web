import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/agency-module/market-return/return')({
  component: () => <div className='p-4'>Agency Module - Market Return - Return</div>,
})

