import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as AboutRoute } from "./about";
import { Route as WelcomeIndexRoute } from "./welcome";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <p>This is the main index route component.</p>
      <ul>
        <li>
          <Link to={AboutRoute.to}>About</Link>
        </li>
        <li>
          <Link to={WelcomeIndexRoute.to}>Welcome</Link>
        </li>
      </ul>
    </>
  );
}
