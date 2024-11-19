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
      <h1 className="text-5xl font-figtree text-center text-white font-extrabold">
        WORDLE
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-figtree text-center text-white font-extrabold">
          The word is{" "}
          <span className="text-backblack font-extrabold">{hiddenWord}</span>
        </h2>
        <h2 className="font-bold text-center text-backblack text-2xl">
          Thanks for playing today!
        </h2>
        <h3 className="text-white text-center text-base mt-4 px-5 mx-10">
          Want to start tracking your stats and streaks?
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
        <>
          {/* win && (
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
          ) */}
          {!win && (
            <div className="flex flex-col items-center justify-center w-full gap-4 md:w-96"></div>
          )}
        </>
        <MyLink
          className="bg-cover bg-center text-backblack rounded-full max-w-96"
          style={{ backgroundImage: 'url("../images/btn.png")' }}
          to="/game"
        >
          Play Again
        </MyLink>
      </div>
    </div>
  );
}

export default GameOver;
