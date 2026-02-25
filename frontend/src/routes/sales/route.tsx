import { useAuthenticate } from "@daveyplate/better-auth-ui";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sales")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "Sales",
  },
});

function RouteComponent() {
  useAuthenticate();
  return (
    <>
      <Outlet />
    </>
  );
}
