import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";
import { Providers } from "@/providers";
import Breadcrumbs from "@/components/breadcrumbs";

export interface MyRouterContext {}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Providers>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumbs />
              </div>
            </header>
            <div className="mx-4 flex flex-col items-center gap-4">
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </Providers>
    </>
  );
}
