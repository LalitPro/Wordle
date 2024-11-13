import { atom } from "recoil";

export const maxTriesAtom = atom({
  key: "MaxTries",
  default: 6,
});

export const selectedWordAtom = atom({
  key: "SelectedWord",
  default: {},
});
