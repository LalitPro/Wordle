import { Keyboard } from "../keyboard/keyboard";
import { GameBoard } from "./gameboard";
import { usePickRandomWord } from "./hooks";
import { useKeyboardInput } from "./hooks"; // adjust path as necessary
import { useOnSubmitGuess } from "./hooks";
import { useCurrentTileRow } from "../tileRow/hook";
import { AiFillSound } from "react-icons/ai";
import { useVolume } from "../VolumeContext";

export const Wordle = () => {
  const onSubmitGuess = useOnSubmitGuess();
  const [tileRow, setTileRow] = useCurrentTileRow();

  usePickRandomWord();
  useKeyboardInput(onSubmitGuess, setTileRow);

  const { volume, setVolume } = useVolume(localStorage.getItem("volume" || 1));

  const changeVolume = (event) => {
    setVolume(event.target.value);
    localStorage.setItem("volume", volume);
  };

  addEventListener("'click", () => {
    console.log("hello");
  });
  return (
    <div className="relative flex flex-col items-center justify-center max-w-full gap-1 mt-10 overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-white font-figtree">
        WORDLE
      </h1>
      <h2 className="text-center">
        Hi,
        <span id="heading" className="text-xl">
          {localStorage.getItem("userName")}{" "}
        </span>
        Guess today's Word
      </h2>
      <div className="absolute z-50 flex flex-col items-center justify-center w-10 right-10 top-10">
        <AiFillSound className="text-3xl text-yellow-500" />
        <input
          className="w-full"
          type="range"
          value={volume}
          min={0}
          max={1}
          step={1}
          onChange={changeVolume}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 xl:gap-10 xl:flex-row">
        <GameBoard />
        <Keyboard />
      </div>
    </div>
  );
};
