import { useVolume } from "../VolumeContext"; //
import { useRecoilState, useRecoilValue } from "recoil";
import { maxTriesAtom, selectedWordAtom } from "./state";
import { useCurrentTileRow } from "../tileRow/hook";
import { currentTileRowIndexAtom } from "../tileRow/state";
import { useUpdateKeyboardState } from "../keyboard/hooks";
import { useEffect } from "react";
import { allWords } from "./allWords";

export function useTileRowIds() {
  const maxTries = useRecoilValue(maxTriesAtom);
  return [...Array(maxTries).keys()];
}
export function useWordLength() {
  return useRecoilValue(selectedWordAtom).length;
}
/*
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
      const expected = selectedWord[index].toUpperCase();
      const actual = letter.letter;

      userWord += actual;

      console.log("expected", expected);
      if (expected == actual) {
        return { ...letter, state: "correct" };
      } else if (selectedWord.includes(actual.toLowerCase())) {
        return { ...letter, state: "partially" };
      } else {
        return { ...letter, state: "incorrect" };
      }
    });
    if (allWords.includes(userWord.toLowerCase())) {
      setTileRow(updatedTileRow);
      updateKeyboardState(updatedTileRow);
      setRowIndex(rowIndex + 1);
    } else {
      alert("Invalid word!Please enter a valid word.");
    }

    console.log("The hidden word is:", selectedWord.toUpperCase());
    localStorage.setItem("hiddenWord", selectedWord.toUpperCase());

    if (rowIndex >= 5) {
      setTimeout(() => (window.location.pathname = "over/lost"), 1000);
    }
    if (userWord == selectedWord.toUpperCase()) {
      setTimeout(() => (window.location.pathname = "over/win"), 1000);
    }
  };

  return onSubmitGuess;
}
  */

export function usePickRandomWord() {
  const [_, setWord] = useRecoilState(selectedWordAtom);

  useEffect(() => {
    const words = allWords;
    const index = Math.floor(Math.random() * words.length);
    setWord(words[index]);
  }, []);

  /*const randomWord = axios.get(
    "https://random-word-api.herokuapp.com/word?length=5"
  );
  setWord(randomWord);
  */
  // console.log(_);
}

/*
export function useKeyboardInput(onSubmitGuess, updateTileRow) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      // Handle Enter key for submitting a guess
      if (key === "enter") {
        onSubmitGuess();
      }
      // Handle Backspace key for deleting a letter
      else if (key === "backspace") {
        updateTileRow((prevRow) => prevRow.slice(0, -1));
      }
      // Handle letter keys for adding letters to the tile row
      else if (key.length === 1 && /[a-z]/.test(key)) {
        updateTileRow((prevRow) => [...prevRow, { letter: key.toUpperCase() }]);
      }
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSubmitGuess, updateTileRow]);
}

*/

export function useOnSubmitGuess() {
  const { volume } = useVolume();
  const selectedWord = useRecoilValue(selectedWordAtom);
  const [tileRow, setTileRow] = useCurrentTileRow();
  const [rowIndex, setRowIndex] = useRecoilState(currentTileRowIndexAtom);
  const updateKeyboardState = useUpdateKeyboardState();

  const onSubmitAudio = new Audio("../audios/submit.mp3");
  onSubmitAudio.volume = volume;

  const onSubmitGuess = () => {
    if (tileRow.length !== selectedWord.length) {
      return;
    }
    let userWord = "";

    const updatedTileRow = tileRow.map((letter, index) => {
      const expected = selectedWord[index].toUpperCase();
      const actual = letter.letter;

      userWord += actual;

      if (expected === actual) {
        return { ...letter, state: "correct" };
      } else if (selectedWord.includes(actual.toLowerCase())) {
        return { ...letter, state: "partially" };
      } else {
        return { ...letter, state: "incorrect" };
      }
    });

    if (allWords.includes(userWord.toLowerCase())) {
      onSubmitAudio.play();
      setTileRow(updatedTileRow);
      updateKeyboardState(updatedTileRow);
      setRowIndex(rowIndex + 1);
    } else {
      alert("Invalid word! Please enter a valid word.");
    }

    if (rowIndex >= 5) {
      setTimeout(() => (window.location.pathname = "over/lost"), 1000);
    }
    if (userWord === selectedWord.toUpperCase()) {
      setTimeout(() => (window.location.pathname = "over/win"), 1000);
    }
  };

  return onSubmitGuess;
}

export function useKeyboardInput(onSubmitGuess, updateTileRow) {
  const { volume } = useVolume(); // Get global volume

  useEffect(() => {
    const handleKeyDown = (event) => {
      const btnClick = new Audio("../audios/btnClick.mp3");
      btnClick.volume = volume; // Set global volume

      const key = event.key.toLowerCase();

      if (key === "enter") {
        onSubmitGuess();
        btnClick.play();
      } else if (key === "backspace") {
        updateTileRow((prevRow) => prevRow.slice(0, -1));
        btnClick.play();
      } else if (key.length === 1 && /[a-z]/.test(key)) {
        updateTileRow((prevRow) => [...prevRow, { letter: key.toUpperCase() }]);
        btnClick.play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSubmitGuess, updateTileRow, volume]);
}
