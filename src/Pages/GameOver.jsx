import React, { useContext, useEffect, useState } from "react";
import MyLink from "../MyLink";
import { VolumeContext } from "../Contexts/VolumeContext";
import { MdOutlineSpatialAudio } from "react-icons/md";

function GameOver() {
  const path = window.location.pathname;
  const { volume } = useContext(VolumeContext);
  const [audio, setAudio] = useState(null);
  const pronounce = localStorage.getItem("audio");

  useEffect(() => {
    try {
      if (pronounce) {
        const audioBlob = new Blob(
          [
            new Uint8Array(
              atob(pronounce)
                .split("")
                .map((char) => char.charCodeAt(0))
            ),
          ],
          { type: "audio/wav" }
        );

        const audioUrl = URL.createObjectURL(audioBlob);
        setAudio(new Audio(audioUrl));
      }
    } catch (e) {
      console.log(e);
    }
  }, [pronounce]);

  console.log("path is:", path);
  let win = path === "/over/win";

  useEffect(() => {
    const playAudio = async () => {
      let sound;
      if (win) {
        sound = new Audio("../audios/gameWin.mp3");
      } else {
        sound = new Audio("../audios/gameLost.mp3");
      }
      sound.volume = volume;

      try {
        await sound.play(); // Play only when interaction happens
      } catch (error) {
        console.log("Autoplay prevented, waiting for user interaction.");
      }
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, [win, volume]);

  const hiddenWord = localStorage.getItem("word") || "";
  const hint = localStorage.getItem("hint") || "";
  const rowIndex = localStorage.getItem("rowIndex") || 1;

  return (
    <div className="flex flex-col w-full gap-5 p-8">
      <h1 className="text-5xl font-extrabold text-center text-white">WORDLE</h1>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-center text-white">
          The word is{" "}
          <span className="font-extrabold text-black">
            {hiddenWord.toUpperCase()}
          </span>
        </h2>

        {audio && (
          <button
            onClick={() => audio.play()}
            className="items-center justify-center m-3 text-2xl font-bold text-white duration-100 hover:scale-110 disabled:opacity-50 md:flex"
          >
            <MdOutlineSpatialAudio className="p-2 mr-2 text-2xl font-black rounded-full bg-rose-400 md:text-5xl" />
            Pronounce
          </button>
        )}

        {!win && (
          <div className="my-5 space-y-3 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-5xl">
              You Lost,
            </h2>
            <h3 className="text-2xl font-semibold text-gray-900 md:text-4xl">
              Try Again,
            </h3>
          </div>
        )}

        {win && (
          <div className="flex items-center justify-center w-full my-2">
            <img
              src={`../images/${rowIndex}.gif`}
              className="shadow-2xl h-60 rounded-3xl shadow-white"
              alt={`Rank ${rowIndex}`}
            />
          </div>
        )}
        <h1 className="mb-10 text-2xl font-bold text-center text-gray-700">
          {hint}
        </h1>

        <h2 className="text-2xl font-bold text-center text-black">
          Thanks for playing today!
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <MyLink
          className="px-20 py-2 my-5 text-xl font-extrabold text-black bg-center bg-cover rounded-full min-w-60 max-w-96"
          style={{ backgroundImage: 'url("../images/Tab.png")' }}
          to="/game"
        >
          Play Again
        </MyLink>
      </div>
    </div>
  );
}

export default GameOver;
