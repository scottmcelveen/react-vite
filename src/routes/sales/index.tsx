import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sales/")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "Sales",
  },
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-3xl font-bold">Sales dashboard page</h1>
    </>
  );
}
