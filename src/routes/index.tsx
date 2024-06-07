import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { H1, H4, Li, Ul } from "~/components/ui/text";
import { useGameStore } from "~/stores/game";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  const reset = useGameStore((state) => state.reset);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <H1>Moonrakers Prestige Tracker</H1>
        <H4>A simple prestige tracker for the board game Moonrakers.</H4>
      </div>
      <div>
        <Button asChild onPointerDown={reset}>
          <Link to="/setup">Start New Game</Link>
        </Button>
      </div>
      <div>
        <H4>Todo:</H4>
        <Ul>
          <Li>Confetti on win or something</Li>
        </Ul>
      </div>
    </main>
  );
}
