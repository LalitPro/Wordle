import { useRecoilState, useRecoilValue } from "recoil";
import { maxTriesAtom, selectedWordAtom } from "./state";
import { useCurrentTileRow } from "../tileRow/hook";
import { currentTileRowIndexAtom } from "../tileRow/state";
import { useUpdateKeyboardState } from "../keyboard/hooks";
import { useEffect } from "react";

export function useTileRowIds() {
  const maxTries = useRecoilValue(maxTriesAtom);
  return [...Array(maxTries).keys()];
}
export function useWordLength() {
  return useRecoilValue(selectedWordAtom).length;
}

export function useOnSubmitGuess() {
  const selectedWord = useRecoilValue(selectedWordAtom);
  const [tileRow, setTileRow] = useCurrentTileRow();
  const [rowIndex, setRowIndex] = useRecoilState(currentTileRowIndexAtom);
  const updateKeyboardState = useUpdateKeyboardState();

  const onSubmitGuess = () => {
    if (tileRow.length !== selectedWord.length) {
      return;
    }

    const updatedTileRow = tileRow.map((letter, index) => {
      const expected = selectedWord[index];
      const actual = letter.letter;

      if (expected == actual) {
        return { ...letter, state: "correct" };
      } else if (selectedWord.includes(actual)) {
        return { ...letter, state: "partially" };
      } else {
        return { ...letter, state: "incorrect" };
      }
    });

    setTileRow(updatedTileRow);
    updateKeyboardState(updatedTileRow);
    setRowIndex(rowIndex + 1);
  };

  return onSubmitGuess;
}

export function usePickRandomWord() {
  const [_, setWord] = useRecoilState(selectedWordAtom);

  useEffect(() => {
    const words = ["REACT", "WORLD", "HELLO"];
    const index = Math.floor(Math.random() * words.length);
    setWord(words[index]);
  });
}
