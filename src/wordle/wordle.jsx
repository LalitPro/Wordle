import { Keyboard } from "../keyboard/keyboard";
import { GameBoard } from "./gameboard";
import { usePickRandomWord } from "./hooks";

export const Wordle = () => {
  usePickRandomWord();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl text-center">WORDLE</h1>
      <GameBoard />
      <Keyboard />
    </div>
  );
};
