import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import TanStackRouterDevtools from "~/components/TanStackRouterDevtools";
import { ModeToggle } from "~/components/mode-toggle";
import { ThemeProvider } from "~/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Toaster } from "~/components/ui/toaster";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div className="flex h-full min-h-screen flex-col gap-2 bg-slate-100 pb-5 dark:bg-slate-900 dark:text-white">
          <header className="sticky top-0 z-50 w-full border-b bg-inherit">
            <nav className="flex justify-between p-2">
              <NavigationMenu>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
              </NavigationMenu>
              <ModeToggle />
            </nav>
          </header>
          <Outlet />
        </div>
        <Toaster />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  );
}
