'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ListTodo, PhoneCall, FileText, BookOpen, BarChart2, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const menuItems = [
  { name: 'Agent Dashboard', href: '/dashboard', icon: Home },
  { name: 'Task Management', href: '/task-management', icon: ListTodo },
  { name: 'Live Call Interface', href: '/live-call', icon: PhoneCall },
  { name: 'Call Summary', href: '/call-summary', icon: FileText },
  { name: 'Knowledge Base', href: '/knowledge-base', icon: BookOpen },
  { name: 'Performance', href: '/performance', icon: BarChart2 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <ShadcnSidebar className="border-r">
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold">AgentCo</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-muted"
              )}>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  )
}

