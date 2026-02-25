import ComingSoon from "@/components/coming-soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sales/")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "Dashboard",
  },
});

function RouteComponent() {
  console.log("RENDERING THE SALES INDEX");
  return (
    <>
      <h1 className="text-3xl font-bold">Sales dashboard page</h1>
      <ComingSoon />
    </>
  );
}
