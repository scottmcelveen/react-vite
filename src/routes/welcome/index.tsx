import { createFileRoute, Link } from '@tanstack/react-router'
import { Route as AboutRoute } from "../about";
import { Route as IndexRoute } from "../index";
import { getUsers } from '../../lib/api/typicode/users';
import { useSuspenseQuery } from '@tanstack/react-query';

function fastDataOptions() {
  return {
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60, // 1 minute
  }
}

function slowDataOptions() {
  return {
    queryKey: ['usersSlow'],
    queryFn: () =>
      new Promise((resolve) =>
        setTimeout(() => resolve('This is some slow data'), 2000),
      ),
  }
}

export const Route = createFileRoute('/welcome/')({
  component: WelcomeComponent,
  loader: async ({ context: { queryClient } }) => {
    // Kick off the fetching of some slower data, but do not await it
    console.log('does queryClient exist?', !!queryClient);
    console.log('typeof queryClient', typeof queryClient);
    queryClient.prefetchQuery(slowDataOptions())

    // Fetch and await some data that resolves quickly
    await queryClient.ensureQueryData(fastDataOptions())
  },
});

function WelcomeComponent() {
  const users = useSuspenseQuery(fastDataOptions())
  return (
      <>
        <p>This is the Welcome page.</p>
        {users?.data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
        <ul>
          <li>
            <Link to={IndexRoute.to}>Home</Link>
          </li>
          <li>
            <Link to={AboutRoute.to}>About</Link>
          </li>
        </ul>
      </>
    );
}
