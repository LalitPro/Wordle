import { useRecoilState, useRecoilValue } from "recoil";
import { tileRowsFamily, currentTileRowIndexAtom } from "./state";

import { useWordLength } from "../wordle/hooks";

export function useTileData(rowIndex) {
  const size = useWordLength();
  const tileRow = useRecoilValue(tileRowsFamily(rowIndex));
  return Array.from(Array(size)).map(
    (_, index) => tileRow[index] || { letter: "", state: "pending" }
  );
}

export function useCurrentTileRow() {
  const rowIndex = useRecoilValue(currentTileRowIndexAtom);
  return useRecoilState(tileRowsFamily(rowIndex));
}

export function useAddLettertoCurrentTileRow() {
  const size = useWordLength();
  const [tileRow, setTileRow] = useCurrentTileRow();

  const onLetterSelected = (letter) => {
    if (tileRow.length >= size) {
      return;
    }

    setTileRow([...tileRow, { letter, state: "pending" }]);
  };

  return onLetterSelected;
}

export function useRemoveLetterFromCurrentRow() {
  const [tileRow, setTileRow] = useCurrentTileRow();

  const onLetterReomve = () => {
    if (tileRow.length <= 0) {
      return;
    }

    setTileRow(tileRow.slice(0, -1));
  };

  return onLetterReomve;
}
