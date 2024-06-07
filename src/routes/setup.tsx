import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { H3, H4, P } from "~/components/ui/text";
import { Sector, sectors, sectorImages } from "~/constants/sectors";
import { cn } from "~/lib/utils";
import { useGameStore } from "~/stores/game";

const colors: Record<Sector, string> = {
  komek: "shadow-komek dark:shadow-komek text-komek",
  sorelia: "shadow-sorelia dark:shadow-sorelia text-sorelia",
  ventus: "shadow-ventus dark:shadow-ventus text-ventus",
  magnomi: "shadow-magnomi dark:shadow-magnomi text-magnomi",
  henko: "shadow-henko dark:shadow-henko text-henko",
};

const borders: Record<Sector, string> = {
  komek: "border-komek",
  sorelia: "border-sorelia",
  ventus: "border-ventus",
  magnomi: "border-magnomi",
  henko: "border-henko",
};

export const Route = createFileRoute("/setup")({
  component: Setup,
});

function Setup() {
  const ships = useGameStore((state) => state.ships);
  const maxPrestige = useGameStore((state) => state.maxPrestige);
  const setMaxPrestige = useGameStore((state) => state.setMaxPrestige);

  return (
    <div className="flex flex-col items-center gap-10 p-2">
      <H3 className="text-center">Select the ships that are playing</H3>
      <div className="mx-auto grid grid-cols-1 gap-10 pb-10 sm:grid-cols-3">
        {sectors.map((sector) => (
          <Ship key={sector} sector={sector} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <H4 className="text-center">Prestige to win</H4>
        <div className="flex gap-5">
          <div
            className={cn(
              "cursor-pointer rounded-sm border-2 px-5",
              maxPrestige === 10 ? "bg-miss" : "",
            )}
            onPointerDown={() => setMaxPrestige(10)}
          >
            10
          </div>
          <div
            className={cn(
              "cursor-pointer rounded-sm border-2 px-5",
              maxPrestige === 15 ? "bg-miss" : "",
            )}
            onPointerDown={() => setMaxPrestige(15)}
          >
            15
          </div>
        </div>
      </div>
      <Button asChild className="w-fit" disabled={!ships.length}>
        <Link to="/game">Start Game</Link>
      </Button>
    </div>
  );
}

function Ship({ sector }: { sector: Sector }) {
  const ships = useGameStore((state) => state.ships);
  const setShips = useGameStore((state) => state.setShips);

  return (
    <div
      className={cn(
        "flex max-w-fit flex-1 cursor-pointer flex-col gap-5 rounded-lg border-4 border-transparent p-8 text-center shadow-xl transition-all",
        colors[sector],
        ships.includes(sector) ? borders[sector] : "",
      )}
      onPointerDown={() =>
        setShips(
          ships.includes(sector)
            ? ships.filter((s) => s !== sector)
            : [...ships, sector],
        )
      }
    >
      <P
        className={cn(
          "rounded-md border-2 border-transparent px-2 transition-all",
          ships.includes(sector) ? " " + borders[sector] : "",
        )}
      >
        {sector.toUpperCase()}
      </P>
      <img src={sectorImages[sector]} alt={sector} className="max-w-[100px]" />
    </div>
  );
}
