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
      <h1 id="heading" className="text-5xl text-center text-white ">
        WORDLE
      </h1>
      <GameBoard />
      <Keyboard />
    </div>
  );
};
