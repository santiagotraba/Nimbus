import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BarChart3, Users, CreditCard, Settings,
  Sparkles, ChevronLeft, LifeBuoy, LogOut,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mainItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Billing", url: "/billing", icon: CreditCard },
];

const supportItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help & Support", url: "/help", icon: LifeBuoy },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center justify-between gap-2 px-2 py-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div className="flex flex-col min-w-0 animate-fade-in">
                <span className="font-bold text-sm truncate">Nimbus</span>
                <span className="text-[11px] text-muted-foreground truncate">Pro Workspace</span>
              </div>
            )}
          </div>
          {!collapsed && (
            <button
              onClick={toggleSidebar}
              className="h-7 w-7 rounded-md hover:bg-sidebar-accent flex items-center justify-center transition-base"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin">
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <NavLink to={item.url} className="transition-base">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <NavLink to={item.url} className="transition-base">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mx-3 mt-4 rounded-xl border border-sidebar-border bg-gradient-to-br from-primary/10 to-primary-glow/10 p-4 animate-fade-in">
            <div className="text-xs font-semibold mb-1">Upgrade to Enterprise</div>
            <p className="text-[11px] text-muted-foreground mb-3">Unlock advanced analytics, SSO and priority support.</p>
            <button className="w-full text-xs font-medium bg-gradient-primary text-primary-foreground rounded-lg py-2 shadow-glow hover:opacity-90 transition-base">
              Upgrade plan
            </button>
          </div>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">AC</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col min-w-0 flex-1 animate-fade-in">
              <span className="text-xs font-semibold truncate">Alex Carter</span>
              <span className="text-[11px] text-muted-foreground truncate">alex@nimbus.io</span>
            </div>
          )}
          {!collapsed && (
            <button className="h-7 w-7 rounded-md hover:bg-sidebar-accent flex items-center justify-center transition-base" aria-label="Sign out">
              <LogOut className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
