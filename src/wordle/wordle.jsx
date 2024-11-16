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

  const { volume, setVolume } = useVolume();

  const changeVolume = (event) => {
    setVolume(event.target.value);
    localStorage.setItem("volume", volume);
  };

  addEventListener("'click", () => {
    console.log("hello");
  });
  return (
    <div className="relative flex flex-col items-center gap-1">
      <img
        src="./images/title.png"
        className="text-5xl text-center text-white w-96 white-drop"
        alt="WORDLE"
      />
      <h2 className="text-center">
        <span id="heading" className="text-xl">
          {localStorage.getItem("userName")}{" "}
        </span>
        Guess today's Word
      </h2>{" "}
      <div className="absolute right-0 flex flex-col items-center justify-center w-10 -top-10">
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
      <div className="flex flex-col items-center justify-center gap-5 xl:gap-10 xl:flex-row">
        <GameBoard />
        <Keyboard />
      </div>
    </div>
  );
};
