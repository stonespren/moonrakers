import { Sector } from "~/constants/sectors";
import { createStoredZustandStore } from "~/lib/utils";

interface GameStoreValues {
  ships: Sector[];
  show: boolean;
  maxPrestige: 10 | 15;
  scores: Record<Sector, number>;
}

interface GameStoreActions {
  setShips: (ships: Sector[]) => void;
  setShow: (show: GameStore["show"]) => void;
  setMaxPrestige: (prestige: GameStore["maxPrestige"]) => void;
  gainPrestige: (ship: Sector) => void;
  losePrestige: (ship: Sector) => void;
  reset: () => void;
}

interface GameStore extends GameStoreValues, GameStoreActions {}

const initialValues: GameStoreValues = {
  ships: [],
  show: false,
  maxPrestige: 15,
  scores: {
    komek: 0,
    henko: 0,
    sorelia: 0,
    ventus: 0,
    magnomi: 0,
  },
};

export const useGameStore = createStoredZustandStore<GameStore>(
  (set, get) => ({
    ...initialValues,
    setShips: (ships) => set({ ships }),
    setShow: (show) => set({ show }),
    setMaxPrestige: (maxPrestige) => set({ maxPrestige }),
    reset: () => set(initialValues),
    gainPrestige: (ship) =>
      set((state) => ({
        scores: {
          ...state.scores,
          [ship]: Math.min(get().maxPrestige, state.scores[ship] + 1),
        },
      })),
    losePrestige: (ship) =>
      set((state) => ({
        scores: {
          ...state.scores,
          [ship]: Math.max(0, state.scores[ship] - 1),
        },
      })),
  }),
  { name: "gameStore" },
  { name: "game store" },
);
