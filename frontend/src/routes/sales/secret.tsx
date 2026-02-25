import { SaleForm } from "@/components/forms/sale";
import { useAuthenticate } from "@daveyplate/better-auth-ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sales/secret")({
  component: RouteComponent,
  staticData: {
    getTitle: () => "Secret Sales Data",
  },
});

function RouteComponent() {
  console.log("RENDERING THE SALES SECRET PAGE");
  useAuthenticate();
  return (
    <>
      <div>
        Only logged in users can access this and see the link to this page in
        the sidebar.
      </div>
      <SaleForm />
    </>
  );
}
