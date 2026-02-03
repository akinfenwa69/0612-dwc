import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ReactRoutes'
import Sidebar from './components/sidebar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex gap-3'>
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

