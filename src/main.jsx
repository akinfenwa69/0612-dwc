import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ReactRoutes'
import { AppSidebar } from './components/app-sidebar.tsx'
import { SidebarProvider, SidebarInset } from './components/ui/sidebar.tsx'
import { SiteHeader } from './components/site-header.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
      className='p-3 h-screen overflow-hidden'
    >
      <AppSidebar variant='inset' />
      <SidebarInset id='card' className='border border-border'>
        <SiteHeader />
        <div className='flex flex-1 flex-col overflow-auto'>
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-5 p-10 relative">
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  </StrictMode>,
)

