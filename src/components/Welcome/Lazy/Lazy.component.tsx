import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../lib/api/typicode/users";

function Component() {


  const { data } = useQuery({ queryKey: ['users'], staleTime: 5000, queryFn: getUsers });
  return (
    <>
      <h1>I'm lazy!</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Component;
export { Component };
