import { Outlet, createRootRoute } from "@tanstack/react-router";
import TanStackRouterDevtools from "~/components/TanStackRouterDevtools";
import { ThemeProvider } from "~/components/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  );
}
