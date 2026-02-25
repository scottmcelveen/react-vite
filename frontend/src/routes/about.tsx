import { createFileRoute } from "@tanstack/react-router";
import ComingSoon from "@/components/coming-soon";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "About",
  },
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-3xl font-bold">About Properly</h1>
      <ComingSoon />
    </>
  );
}
