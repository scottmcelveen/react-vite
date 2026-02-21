import { Link, Outlet } from "react-router";

function Welcome() {
  console.log('---- in the Welcome() component ----');
  return (
    <>
      <h1>Welcome Component!</h1>
      <Link to="/welcome/lazy">
        Lazy Loaded Component
      </Link>
      <Outlet />
    </>
  )
}

export default Welcome
