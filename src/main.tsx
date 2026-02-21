import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Welcome from './components/Welcome/Welcome.tsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "welcome",
        Component: Welcome,
        loader: async () => {
          console.log('---- in the loader for the /welcome route ----');
        },
        children: [
          {
            path: "lazy",
            lazy: {
              loader: async () =>
                (await import("./components/Welcome/Lazy/Lazy.loader.js")).loader,
              action: async () =>
                (await import("./components/Welcome/Lazy/Lazy.action.js")).action,
              Component: async () =>
                (await import("./components/Welcome/Lazy/Lazy.component.js")).Component,
            },
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
