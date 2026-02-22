import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as IndexRoute } from "./index";
import { Route as WelcomeIndexRoute } from "./welcome/index";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <p>This is the About page.</p>
      <ul>
        <li>
          <Link to={IndexRoute.to}>Home</Link>
        </li>
        <li>
          <Link to={WelcomeIndexRoute.to}>Welcome</Link>
        </li>
      </ul>
    </>
  );
}
