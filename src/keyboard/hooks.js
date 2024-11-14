import { useRecoilState, useRecoilValue } from "recoil";
import { keyboardState } from "./state";
import {
  useAddLettertoCurrentTileRow,
  useRemoveLetterFromCurrentRow,
} from "../tileRow/hook";
import { useOnSubmitGuess } from "../wordle/hooks";

export const useLetterState = (letter) => {
  const keyboard = useRecoilValue(keyboardState);
  return keyboard[letter] || "pending";
};

export const useOnLetterSelected = (letter) => {
  const addLetterToTileRow = useAddLettertoCurrentTileRow();
  const letterSelcted = () => addLetterToTileRow(letter);
  return letterSelcted;
};

export const useOnEnterClicked = () => {
  return useOnSubmitGuess();
};

export const useOnBackspaceClicked = () => {
  return useRemoveLetterFromCurrentRow();
};

export const useUpdateKeyboardState = () => {
  const [keyboard, setKeyboard] = useRecoilState(keyboardState);

  const updateKeyboardState = (letters = []) => {
    const newKeyboardState = { ...keyboard };
    letters.forEach((letter) => {
      if (newKeyboardState[letter.letter] !== "correct") {
        newKeyboardState[letter.letter] = letter.state;
      }
    });

    setKeyboard(newKeyboardState);
  };

  return updateKeyboardState;
};
