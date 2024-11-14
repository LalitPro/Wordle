import { Keyboard } from "../keyboard/keyboard";
import { GameBoard } from "./gameboard";
import { usePickRandomWord } from "./hooks";
import { useKeyboardInput } from "./hooks"; // adjust path as necessary
import { useOnSubmitGuess } from "./hooks";
import { useCurrentTileRow } from "../tileRow/hook";

export const Wordle = () => {
  const onSubmitGuess = useOnSubmitGuess();
  const [tileRow, setTileRow] = useCurrentTileRow();

  usePickRandomWord();

  useKeyboardInput(onSubmitGuess, setTileRow);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl text-center text-white white-drop">WORDLE</h1>
      <h2 className="text-center">
        <span id="heading" className="text-xl">
          {localStorage.getItem("userName")}{" "}
        </span>
        Guess today's Word
      </h2>
      <GameBoard />
      <Keyboard />
    </div>
  );
};
