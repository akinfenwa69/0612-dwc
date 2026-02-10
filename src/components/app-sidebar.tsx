import * as React from "react"

import { NavProjectes } from "@/components/nav-projectes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ClipboardList, Contact, Home, Loader, Settings } from "lucide-react"
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";

const data = {
  user: {
    name: "Pol Poblet Pallisé",
    email: "popo418@vidalibarraquer.net",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "JavaScript",
      url: "/javascript",
      icon: IoLogoJavascript,
      iconColor: 'yellow-400'
    },
    {
      title: "React.js",
      url: "/react",
      icon: IoLogoReact,
      iconColor: 'blue-400'
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
  projectes: [
    {
      name: "Llista Contactes",
      url: "/javascript/llista-contactes",
      icon: Contact,
    },
    {
      name: "Gestor Tasques",
      url: "/react/gestor-tasques",
      icon: ClipboardList,
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <Loader className="!size-5" />
                <span className="text-base font-semibold">0612 ~ DWC</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjectes items={data.projectes} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
