import React from "react";
import { Link } from "react-router-dom";

function GameOver() {
  const path = window.location.pathname;

  console.log("path is:", path);
  let msg = "";

  if (path == "/over/win") {
    const gameWin = new Audio("../audios/gameWin.mp3");
    gameWin.play();
    msg = "Your Are Winner";
  } else {
    const gameLost = new Audio("../audios/gameLost.mp3");
    gameLost.play();
    msg = "You Lost Try Again";
  }

  const userName = localStorage.getItem("userName");
  const hiddenWord = localStorage.getItem("hiddenWord");

  return (
    <div className="flex flex-col w-full gap-5 p-2 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
      <img
        src="../images/title.png"
        className="self-center w-full text-5xl text-center text-white md:w-1/2 white-drop"
        alt="WORDLE"
      />
      <div className="flex flex-col justify-end sm:items-end sm:justify-center md:flex-row">
        <h2 className="text-3xl md:text-5xl">
          The word is{" "}
          <span className="text-indigo-500 font-semibold">{hiddenWord}</span>,
        </h2>
        <h2 className="text-3xl md:text-5xl">{msg},</h2>

        <h1 id="heading" className="text-5xl md:text-7xl">
          {userName}
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-3 mb-4 md:gap-7">
          <Link
            className="w-full py-3 text-2xl font-bold text-center text-white border-4 shadow-2xl hover:bg-sky-500 bg-sky-400 rounded-2xl"
            to="/game"
          >
            Play Again
          </Link>
          {
            <Link
              className="w-full py-3 text-2xl font-bold text-center text-white border-4 shadow-2xl hover:bg-sky-500 bg-sky-400 rounded-2xl"
              to="/guide"
            >
              How To Play
            </Link>
          }
          <Link
            className="w-full py-3 text-2xl font-bold text-center text-white border-4 shadow-2xl hover:bg-sky-500 bg-sky-400 rounded-2xl"
            to="/credits"
          >
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
