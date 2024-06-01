import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <main className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-center text-9xl underline">Moonrakers</h1>
        <ModeToggle />
      </main>
    </ThemeProvider>
  );
}
