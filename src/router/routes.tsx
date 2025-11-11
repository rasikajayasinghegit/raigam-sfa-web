import AppLayout from '@/components/layout/AppLayout'
import LoginPage from '@/features/auth/LoginPage'
import GuestRoute from '@/router/GuestRoute'
import ProtectedRoute from '@/router/ProtectedRoute'
import { createBrowserRouter } from 'react-router-dom'

import HeartCount from '@/pages/dashboard/HeartCount'
import HomeReport from '@/pages/dashboard/HomeReport'

export const router = createBrowserRouter([
  {
    element: <GuestRoute />,
    children: [{ path: '/sign-in', element: <LoginPage /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <HomeReport /> },
          { path: 'dashboard/home-report', element: <HomeReport /> },
          { path: 'dashboard/heart-count', element: <HeartCount /> },
          // ... map the rest of your tree
        ],
      },
    ],
  },
  { path: '*', element: <div className="p-6">Not Found</div> },
])
