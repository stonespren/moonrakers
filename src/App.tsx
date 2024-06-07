import {
  ErrorComponent,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Link } from "@tanstack/react-router";
import { P } from "./components/ui/text";
import { Button } from "./components/ui/button";

const router = createRouter({
  routeTree,
  notFoundMode: "root",
  defaultNotFoundComponent: () => (
    <div className="flex flex-col items-center justify-center gap-10">
      <P>Uh-oh, that page was not found!</P>
      <Button asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
