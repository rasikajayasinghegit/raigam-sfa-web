import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/hr-module/time-attendance')({
  component: () => <div className='p-4'>HR Module - Time Attendance</div>,
})

