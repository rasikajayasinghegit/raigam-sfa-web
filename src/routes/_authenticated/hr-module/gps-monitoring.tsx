import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/hr-module/gps-monitoring')({
  component: () => <div className='p-4'>HR Module - GPS Monitoring</div>,
})

