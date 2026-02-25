import ComingSoon from "@/components/coming-soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "Home",
  },
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-3xl font-bold">Landing page</h1>
      <ComingSoon />
    </>
  );
}
