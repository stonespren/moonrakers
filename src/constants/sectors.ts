import henko from "~/images/henko.png";
import komek from "~/images/komek.png";
import magnomi from "~/images/magnomi.png";
import sorelia from "~/images/sorelia.png";
import ventus from "~/images/ventus.png";

export const sectors = [
  "komek",
  "henko",
  "sorelia",
  "ventus",
  "magnomi",
] as const;

export type Sector = (typeof sectors)[number];

export const sectorImages: Record<Sector, string> = {
  komek,
  henko,
  sorelia,
  ventus,
  magnomi,
};
