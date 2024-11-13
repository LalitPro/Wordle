import { atom, atomFamily } from "recoil";

export const tileRowsFamily = atomFamily({
  key: "TileRowsFamily",
  default: [],
});

export const currentTileRowIndexAtom = atom({
  key: "currentTileRowIndexAtom",
  default: 0,
});
