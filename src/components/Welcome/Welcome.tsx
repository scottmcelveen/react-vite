import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router";
import { getUsers, type User } from "../../lib/api/typicode/users";

function Welcome() {
  console.log('---- in the Welcome() component ----');

  const { data } = useQuery({ queryKey: ['users'], staleTime: 5000, queryFn: getUsers })
  return (
    <>
      <h1>Welcome Component!</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link to="/welcome/lazy">
        Lazy Loaded Component
      </Link>
      <Outlet />
    </>
  )
}

export default Welcome
