import {
  useAddLettertoCurrentTileRow,
  useRemoveLetterFromCurrentRow,
} from "../tileRow/hook";
import { useOnSubmitGuess } from "../wordle/hooks";
import { useContext } from "react";
import { KeyboardContext } from "../Contexts/KeyboardContext";

// change
export const useLetterState = (letter) => {
  // const keyboard = useRecoilValue(keyboardState);
  const keyboard = useContext(KeyboardContext).keyboardState;
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

//change
export const useUpdateKeyboardState = () => {
  const { keyboardState, setKeyboardState } = useContext(KeyboardContext);

  const updateKeyboardState = (letters = []) => {
    const newKeyboardState = { ...keyboardState };
    letters.forEach((letter) => {
      if (newKeyboardState[letter.letter] !== "correct") {
        newKeyboardState[letter.letter] = letter.state;
      }
    });

    setKeyboardState(newKeyboardState);
  };

  return updateKeyboardState;
};
