import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "~/components/mode-toggle";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-center text-9xl underline">Moonrakers</h1>
      <ModeToggle />
    </main>
  );
}
