import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "About",
  },
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-3xl font-bold">About page</h1>
    </>
  );
}
