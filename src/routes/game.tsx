import { Navigate, createFileRoute } from "@tanstack/react-router";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { P } from "~/components/ui/text";
import { Sector, sectorImages } from "~/constants/sectors";
import { cn } from "~/lib/utils";
import { useGameStore } from "~/stores/game";
import { useToast } from "~/components/ui/use-toast";

export const Route = createFileRoute("/game")({
  component: Game,
});

function Game() {
  const ships = useGameStore((state) => state.ships);
  const maxPrestige = useGameStore((state) => state.maxPrestige);
  const show = useGameStore((state) => state.show);
  const setShow = useGameStore((state) => state.setShow);

  if (ships.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center gap-5 p-2 sm:flex-row sm:items-start sm:justify-start">
      <div className="sticky top-[57px] z-50 flex h-full w-screen flex-1 flex-col items-center gap-5 bg-slate-100 py-2 dark:bg-slate-900 sm:top-20 sm:w-fit">
        <div className="flex w-fit flex-col items-center gap-2">
          <Switch
            id="show"
            checked={show}
            onCheckedChange={() => setShow(!show)}
          />
          <Label htmlFor="show">Show Scores</Label>
        </div>
        <div className="flex gap-5 sm:flex-col">
          {ships.map((ship) => (
            <Ship key={ship} ship={ship} />
          ))}
        </div>
      </div>
      <div className="pt-2">
        <div className="flex flex-col items-center">
          {[...Array(maxPrestige + 1).keys()].reverse().map((num) => (
            <BoardRow key={num} num={num} />
          ))}
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
}

function BoardRow({ num }: { num: number }) {
  const scores = useGameStore((state) => state.scores);
  const ships = useGameStore((state) => state.ships);
  const show = useGameStore((state) => state.show);

  const shipsWithThisScore = Object.entries(scores)
    .filter(([ship, score]) => ships.includes(ship as Sector) && score === num)
    .map(([ship]) => ship) as Sector[];
  const shipImages = shipsWithThisScore.map((ship) => sectorImages[ship]);

  return (
    <div className={cn("w-[370px]", num === 0 ? "border-b-2" : "")}>
      <div className="flex min-h-32 items-center justify-center gap-2 border-x-2 border-t-2 bg-slate-900 py-5">
        {show && (
          <>
            <div className="flex-1">
              {shipImages[0] && <img src={shipImages[0]} />}
            </div>
            <div className="flex-1">
              {shipImages[1] && <img src={shipImages[1]} />}
            </div>
          </>
        )}
        <div className="flex h-10 w-10 rotate-45 items-center justify-center bg-miss">
          <P className="-rotate-45 text-slate-900">{num}</P>
        </div>
        {show && (
          <>
            <div className="flex-1">
              {shipImages[2] && <img src={shipImages[2]} />}
            </div>
            <div className="flex-1">
              {shipImages[3] && <img src={shipImages[3]} />}
            </div>
          </>
        )}
      </div>
      {show && (
        <div className="flex w-full justify-center border-x-2 bg-slate-900">
          {shipImages[4] && <img src={shipImages[4]} className="w-[85px]" />}
        </div>
      )}
    </div>
  );
}

const textColors: Record<Sector, string> = {
  komek: "text-komek",
  henko: "text-henko",
  sorelia: "text-sorelia",
  ventus: "text-ventus",
  magnomi: "text-magnomi",
};

const hoverBorders: Record<Sector, string> = {
  komek: "hover:border-komek",
  henko: "hover:border-henko",
  sorelia: "hover:border-sorelia",
  ventus: "hover:border-ventus",
  magnomi: "hover:border-magnomi",
};

const bgColors: Record<Sector, string> = {
  komek: "bg-komek dark:bg-komek hover:bg-komek/80 dark:hover:bg-komek/80",
  henko: "bg-henko dark:bg-henko hover:bg-henko/80 dark:hover:bg-henko/80",
  sorelia:
    "bg-sorelia dark:bg-sorelia hover:bg-sorelia/80 dark:hover:bg-sorelia/80",
  ventus: "bg-ventus dark:bg-ventus hover:bg-ventus/80 dark:hover:bg-ventus/80",
  magnomi:
    "bg-magnomi dark:bg-magnomi hover:bg-magnomi/80 dark:hover:bg-magnomi/80",
};

function Ship({ ship }: { ship: Sector }) {
  const scores = useGameStore((state) => state.scores);
  const maxPrestige = useGameStore((state) => state.maxPrestige);
  const gainPrestige = useGameStore((state) => state.gainPrestige);
  const losePrestige = useGameStore((state) => state.losePrestige);
  const setShow = useGameStore((state) => state.setShow);

  const [showShipPrestige, setShowShipPrestige] = useState(false);
  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  function handleGainPrestige() {
    const newScore = scores[ship] + 1;
    const title =
      newScore === maxPrestige
        ? `${ship.toUpperCase()} WINS! 🎉`
        : "Prestige Gained";
    toast({
      variant: "henko",
      title,
    });
    gainPrestige(ship);
    if (newScore === maxPrestige) {
      setShow(true);
      setOpen(false);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }

  function handleLosePrestige() {
    toast({ variant: "hazard", title: "Prestige Lost" });
    losePrestige(ship);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <img
          src={sectorImages[ship]}
          alt={ship}
          className={cn(
            "h-14 w-14 cursor-pointer border-2 border-transparent p-2 transition-all",
            hoverBorders[ship],
          )}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={textColors[ship]}>
            {ship.toUpperCase()}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-14 pt-5">
          <div className="flex gap-5">
            <Button
              className="bg-hazard dark:bg-hazard hover:bg-hazard/80 dark:hover:bg-hazard/80 w-full"
              onPointerDown={handleLosePrestige}
            >
              <CircleMinus className="mr-2 h-4 w-4" />
              Lose Prestige
            </Button>
            <Button
              className="w-full bg-henko hover:bg-henko/80 dark:bg-henko dark:hover:bg-henko/80"
              onPointerDown={handleGainPrestige}
            >
              <CirclePlus className="mr-2 h-4 w-4" />
              Gain Prestige
            </Button>
          </div>
          <div className="flex">
            <Button
              className={cn("select-none", bgColors[ship])}
              onPointerDown={() => setShowShipPrestige(true)}
              onPointerUp={() => setShowShipPrestige(false)}
            >
              Reveal Presige:
            </Button>
            {showShipPrestige && (
              <div className="select-none pl-5">
                <div className="flex h-10 w-10 rotate-45 items-center justify-center bg-miss">
                  <P className="-rotate-45 text-slate-900">{scores[ship]}</P>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
