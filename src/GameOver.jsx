import React from "react";
import MyLink from "./MyLink";

function GameOver() {
  const path = window.location.pathname;

  console.log("path is:", path);

  let win = true;

  if (path == "/over/win") {
    const gameWin = new Audio("../audios/gameWin.mp3");
    gameWin.volume = localStorage.getItem("volume");
    if (gameWin.volume == 0) {
      gameWin.volume = 1;
    } else {
      gameWin.volume = 0;
    }
    gameWin.play();
  } else {
    const gameLost = new Audio("../audios/gameLost.mp3");
    gameLost.play();
    gameLost.volume = localStorage.getItem("volume");
    if (gameLost.volume == 0) {
      gameLost.volume = 1;
    } else {
      gameLost.volume = 0;
    }
    win = false;
  }

  const userName = localStorage.getItem("userName");
  const hiddenWord = localStorage.getItem("hiddenWord");
  const rowIndex = localStorage.getItem("rowIndex") || 1;

  return (
    <div className="flex flex-col w-full gap-5 p-8">
      <h1 className="text-5xl font-extrabold text-center text-white font-figtree">
        WORDLE
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-center text-white font-figtree">
          The word is{" "}
          <span className="font-extrabold text-backblack">{hiddenWord}</span>
        </h2>
        <h2 className="text-2xl font-bold text-center text-backblack">
          Thanks for playing today!
        </h2>
        <h3 className="px-5 mx-10 mt-4 text-base text-center text-white">
          Want to start tracking your stats and streaks?
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <MyLink
          className="px-20 py-2 my-5 text-xl font-extrabold bg-center bg-cover rounded-full font-figtree text-backblack min-w-60 max-w-96"
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
