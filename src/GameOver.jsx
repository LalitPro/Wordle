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
    <div className="flex flex-col w-full gap-5 p-2 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
      <img
        src="../images/title.png"
        className="self-center w-full text-5xl text-center text-white md:w-1/2 white-drop"
        alt="WORDLE"
      />
      <div className="flex flex-col items-center justify-center">
        {!win && (
          <h2 className="text-3xl md:text-5xl">
            The word is{" "}
            <span className="font-semibold text-indigo-500">{hiddenWord}</span>,
          </h2>
        )}
        <h1 className="self-center text-5xl text-white justify-self-center md:text-7xl">
          {userName}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
        <>
          {win && (
            <div className="flex items-center justify-center w-full">
              {rowIndex == 1 && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <img
                    src="../images/1st.gif"
                    className="shadow-2xl h-60 rounded-3xl shadow-white"
                  />
                  <h2 className="text-3xl md:text-5xl">Genuis Man,</h2>
                </div>
              )}
              {rowIndex == 2 && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <img
                    src="../images/2nd.gif"
                    className="shadow-2xl h-60 rounded-3xl shadow-white"
                  />
                  <h2 className="text-3xl md:text-5xl">
                    Excellence Performed,
                  </h2>
                </div>
              )}
              {rowIndex == 3 && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <img
                    src="../images/3rd.gif"
                    className="shadow-2xl h-60 rounded-3xl shadow-white"
                  />
                  <h2 className="text-3xl md:text-5xl">Great Play,</h2>
                </div>
              )}
              {rowIndex == 4 && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <img
                    src="../images/4th.gif"
                    className="shadow-2xl h-60 rounded-3xl shadow-white"
                  />
                  <h2 className="text-3xl md:text-5xl">Minded Person,,</h2>
                </div>
              )}
              {rowIndex == 5 && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <img
                    src="../images/5th.gif"
                    className="shadow-2xl h-60 rounded-3xl shadow-white"
                  />
                  <h2 className="text-3xl md:text-5xl">Guess Guess and Win,</h2>
                </div>
              )}
              {rowIndex == 6 && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <img
                    src="../images/6th.gif"
                    className="shadow-2xl h-60 rounded-3xl shadow-white"
                  />
                  <h2 className="text-3xl md:text-5xl">Never Lost,</h2>
                </div>
              )}
            </div>
          )}
          {!win && (
            <div className="flex flex-col items-center justify-center w-full gap-4 md:w-96">
              <img
                src="../images/Lost.webp"
                className="shadow-2xl h-60 rounded-3xl shadow-white"
              />
              <h2 className="text-2xl md:text-3xl xl:5xl">Try Again,</h2>
            </div>
          )}
        </>

        <div className="flex flex-col w-full gap-3 mb-4 md:gap-7">
          <MyLink to="/game">Play Again</MyLink>
          <MyLink to="/guide">How To Play</MyLink>
          <MyLink to="/credits">Credits</MyLink>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
