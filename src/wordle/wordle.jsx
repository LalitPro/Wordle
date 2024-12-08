import { Keyboard } from "../keyboard/keyboard";
import { GameBoard } from "./gameboard";
import { usePickRandomWord } from "./hooks";
import { useKeyboardInput } from "./hooks"; // adjust path as necessary
import { useOnSubmitGuess } from "./hooks";
import { useCurrentTileRow } from "../tileRow/hook";
import { AiFillSound } from "react-icons/ai";
import { useVolume } from "../VolumeContext";
import { useEffect, useState } from "react";

export const Wordle = () => {
  const [invalid, setInvalid] = useState(false);

  const onSubmitGuess = useOnSubmitGuess();
  const [tileRow, setTileRow] = useCurrentTileRow();

  usePickRandomWord();
  useKeyboardInput(onSubmitGuess, setTileRow);

  const { volume, setVolume } = useVolume(localStorage.getItem("volume" || 1));

  const changeVolume = (event) => {
    setVolume(event.target.value);
    localStorage.setItem("volume", volume);
  };

  addEventListener("click", () => {
    setInvalid(localStorage.getItem("invalid"));
  });

  addEventListener("keypress", () => {
    setInvalid(localStorage.getItem("invalid"));
    useKeyboardInput(useOnSubmitGuess, setTileRow);
  });

  return (
    <div className="relative flex flex-col items-center justify-center max-w-full gap-1 mt-10 overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-white lg:text-8xl font-figtree">
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
      {invalid && (
        <div className="fixed inset-0 z-10 flex items-center justify-center duration-100 bg-gray-800 bg-opacity-50">
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-96">
            <button
              type="button"
              className="px-4 py-2 m-3 text-sm font-medium duration-100 bg-white border border-gray-300 rounded-md shadow-sm text-md hover:scale-105 text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={() => {
                localStorage.setItem("invalid", "");
                setInvalid(false);
              }}
            >
              X
            </button>

            <h3 className="mb-5 text-2xl font-medium leading-6 text-red-500">
              Invalid Word!
            </h3>
            <h4 className="mb-5 text-xl font-medium leading-6 text-center text-gray-500">
              आपने जो WORD लिखा है वो मान्य (Valid) नहीं हैं{" "}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};
