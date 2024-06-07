import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StateCreator, create } from "zustand";
import {
  DevtoolsOptions,
  PersistOptions,
  devtools,
  persist,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type {} from "@redux-devtools/extension";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createZustandStore<T>(
  initializer: StateCreator<T, [["zustand/immer", never]], []>,
  devtoolsOptions?: DevtoolsOptions,
) {
  return create<T>()(devtools(immer(initializer), devtoolsOptions));
}

export function createStoredZustandStore<T>(
  initializer: StateCreator<T, [["zustand/immer", never]], []>,
  persistOptions: PersistOptions<T>,
  devtoolsOptions?: DevtoolsOptions,
) {
  return create<T>()(
    persist(devtools(immer(initializer), devtoolsOptions), persistOptions),
  );
}
