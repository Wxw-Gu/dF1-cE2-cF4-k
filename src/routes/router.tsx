import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home'
import { Index } from '@/pages/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      { path: 'home', element: <Home /> },
    ],
  },
])
