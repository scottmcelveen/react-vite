import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRight, House } from "lucide-react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Route as IndexRoute } from "@/routes/index";
import { Route as AboutRoute } from "@/routes/about";
import { Route as SalesIndexRoute } from "@/routes/sales";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export function AppSidebar() {
  const matchRoute = useMatchRoute();

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-2xl font-bold">Properly</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={
                    matchRoute({ to: IndexRoute.to, fuzzy: false }) !== false
                  }
                >
                  <Link to={IndexRoute.to}>Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={
                    matchRoute({ to: AboutRoute.to, fuzzy: false }) !== false
                  }
                >
                  <Link to={AboutRoute.to}>About</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible
                key="sales"
                asChild
                defaultOpen={
                  matchRoute({ to: SalesIndexRoute.to, fuzzy: true }) !== false
                }
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip="Sales"
                      isActive={
                        matchRoute({
                          to: SalesIndexRoute.to,
                          fuzzy: true,
                        }) !== false
                      }
                    >
                      <House />
                      <span>Sales</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem key="sales-index">
                        <SidebarMenuSubButton
                          asChild
                          isActive={
                            matchRoute({
                              to: SalesIndexRoute.to,
                              fuzzy: false,
                            }) !== false
                          }
                        >
                          <Link to={SalesIndexRoute.to}>
                            <span>Dashboard</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h1 className="text-2xl font-bold">Footer Goes Here</h1>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
