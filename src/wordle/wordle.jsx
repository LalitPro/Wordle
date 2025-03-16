import { Keyboard } from "../keyboard/keyboard";
import { GameBoard } from "./gameboard";
import { usePickRandomWord } from "./hooks";
import { useKeyboardInput } from "./hooks";
import { useOnSubmitGuess } from "./hooks";
import { useCurrentTileRow } from "../tileRow/hook";
import { AiFillSound } from "react-icons/ai";
import { memo, useContext, useEffect, useState } from "react";
import { VolumeContext } from "../Contexts/VolumeContext";
import { WordleContext } from "../Contexts/WordleContext";
import getWordHint, { getWordPronunciation } from "../api";
import { useParams } from "react-router-dom";
import { DeHashWord } from "../hash";
import { GiShintoShrine } from "react-icons/gi";
import { MdOutlineSpatialAudio } from "react-icons/md";

const Wordle = () => {
  const { setSelectedWord, setPronounce } = useContext(WordleContext);

  const selectedWord = useContext(WordleContext).selectedWord.word;

  const secretWord = useParams().secretWord;

  const [invalid, setInvalid] = useState(false);

  const [hint, setHint] = useState();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname != "/game/" &&
      window.location.pathname != "/game"
    ) {
      setSelectedWord({
        word: DeHashWord(secretWord),
        length: secretWord.length,
      });
    }

    async function callAPI() {
      localStorage.setItem("word", selectedWord);

      const hint = await getWordHint(selectedWord);

      localStorage.setItem("hint", hint[1]?.definition || hint[0]?.definition);
      if (!hint[0].definition) {
        setHint("Not Availble!");
      }
      setHint(hint[0]?.definition);

      const audio = await getWordPronunciation(selectedWord);
      localStorage.setItem("audio", audio);
    }

    if (selectedWord) {
      callAPI();
    }
  }, [selectedWord]);

  const { volume, setVolume } = useContext(VolumeContext);

  const onSubmitGuess = useOnSubmitGuess(selectedWord);
  const [tileRow, setTileRow] = useCurrentTileRow();

  window.location.pathname == "/game" || window.location.pathname == "/game/"
    ? usePickRandomWord()
    : null;
  useKeyboardInput(onSubmitGuess, setTileRow);

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
      <div className="flex items-center justify-center w-full h-full gap-5 md:hidden xl:gap-10 xl:flex-row">
        <button
          onClick={(e) => {
            setShowHint(true);
            e.target.disabled = true;
          }}
          className="flex items-center justify-center m-3 text-2xl font-bold text-white duration-100 disabled:hover:scale-100 disabled:opacity-70 hover:scale-110"
        >
          <GiShintoShrine className="p-2 mr-2 text-2xl font-black bg-yellow-400 rounded-full text-lightwhite md:text-5xl" />
        </button>
        {/* 
        <button
          onClick={(e) => {
            if (!pronounce) {
              return;
            }
            if (pronounceCount >= 5) {
              e.target.disabled = true;
            } else {
              pronounce.play();
              setPronounceCount(pronounceCount + 1);
            }
          }}
          className={
            "items-center justify-center md:hidden m-3 text-2xl font-bold text-white duration-100 disabled:hover:scale-100 disabled:opacity-50 hover:scale-110 flex" +
            (!pronounce ? " opacity-50" : "")
          }
        >
          <MdOutlineSpatialAudio className="p-2 mr-2 text-2xl font-black rounded-full bg-rose-400 text-lightwhite md:text-5xl" />
        </button> */}
        <div className="flex flex-col items-center justify-center w-10 right-5 top-10">
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
      </div>

      {showHint && (
        <h2 className="text-center text-white">
          <span className="px-2 py-1 text-lg bg-black rounded-md bg-opacity-30">
            Hint: {hint ? hint : "Loading..."}
          </span>
        </h2>
      )}
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 xl:gap-10 xl:flex-row">
        <GameBoard />
        <div classname="flex flex-col items-center justify-center w-full h-full gap-5 xl:gap-10 xl:flex-row">
          <div className="items-center justify-center hidden w-full h-full gap-5 md:flex xl:gap-10 xl:flex-row">
            <button
              onClick={(e) => {
                setShowHint(true);
                e.target.disabled = true;
              }}
              className="flex items-center justify-center m-3 text-2xl font-bold text-white duration-100 disabled:hover:scale-100 disabled:opacity-50 hover:scale-110"
            >
              <GiShintoShrine className="p-2 mr-2 text-2xl font-black bg-yellow-400 rounded-full text-lightwhite md:text-5xl" />
              Hint
            </button>
            {/* 
            <button
              onClick={(e) => {
                if (!pronounce) {
                  return;
                }
                if (pronounceCount >= 5) {
                  e.target.disabled = true;
                } else {
                  pronounce.play();
                  setPronounceCount(pronounceCount + 1);
                }
              }}
              className={
                "items-center justify-center hidden m-3 text-2xl font-bold text-white duration-100 disabled:hover:scale-100 disabled:opacity-50 hover:scale-110 md:flex" +
                (!pronounce ? " opacity-50" : "")
              }
            >
              <MdOutlineSpatialAudio className="p-2 mr-2 text-2xl font-black rounded-full bg-rose-400 text-lightwhite md:text-5xl" />
              Pronounce
            </button> */}
          </div>

          <Keyboard />
        </div>
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

export default memo(Wordle);
