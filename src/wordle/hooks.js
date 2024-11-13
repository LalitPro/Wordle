import { useRecoilState, useRecoilValue } from "recoil";
import { maxTriesAtom, selectedWordAtom } from "./state";
import { useCurrentTileRow } from "../tileRow/hook";
import { currentTileRowIndexAtom } from "../tileRow/state";
import { useUpdateKeyboardState } from "../keyboard/hooks";
import { useEffect } from "react";
import { allWords } from "./allWords";
import axios from "axios";

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
    let userWord = "";

    const updatedTileRow = tileRow.map((letter, index) => {
      const expected = selectedWord[index];
      const actual = letter.letter;

      userWord += actual;
      if (expected == actual) {
        return { ...letter, state: "correct" };
      } else if (selectedWord.includes(actual)) {
        return { ...letter, state: "partially" };
      } else {
        return { ...letter, state: "incorrect" };
      }
    });

    console.log(userWord);

    setTileRow(updatedTileRow);
    updateKeyboardState(updatedTileRow);
    setRowIndex(rowIndex + 1);
  };

  return onSubmitGuess;
}

export function usePickRandomWord() {
  const [_, setWord] = useRecoilState(selectedWordAtom);

  /*
  useEffect(() => {
    const words = allWords;
    const index = Math.floor(Math.random() * words.length);
    setWord(words[index]);
  });
  */

  const randomWord = axios.get(
    "https://random-word-api.herokuapp.com/word?length=5"
  );
  setWord(randomWord);
  console.log(_);
}
