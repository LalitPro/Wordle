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

        {!win && (
          <div className="my-5 space-y-3 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-5xl font-figtree">
              You Lost,
            </h2>
            <h3 className="text-2xl font-semibold text-gray-900 md:text-4xl font-figtree">
              Try Again,
            </h3>
          </div>
        )}

        {win && (
          <div className="flex items-center justify-center w-full my-2">
            {rowIndex == 1 && (
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <img
                  src="../images/1st.gif"
                  className="shadow-2xl h-60 rounded-3xl shadow-white"
                />
                <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl font-figtree">
                  Genuis Man,
                </h2>
              </div>
            )}
            {rowIndex == 2 && (
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <img
                  src="../images/2nd.gif"
                  className="shadow-2xl h-60 rounded-3xl shadow-white"
                />
                <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl font-figtree">
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
                <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl font-figtree">
                  Great Play,
                </h2>
              </div>
            )}
            {rowIndex == 4 && (
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <img
                  src="../images/4th.gif"
                  className="shadow-2xl h-60 rounded-3xl shadow-white"
                />
                <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl font-figtree">
                  Minded Person,,
                </h2>
              </div>
            )}
            {rowIndex == 5 && (
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <img
                  src="../images/5th.gif"
                  className="shadow-2xl h-60 rounded-3xl shadow-white"
                />
                <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl font-figtree">
                  Guess Guess and Win,
                </h2>
              </div>
            )}
            {rowIndex == 6 && (
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <img
                  src="../images/6th.gif"
                  className="shadow-2xl h-60 rounded-3xl shadow-white"
                />
                <h2 className="text-3xl font-semibold text-gray-900 md:text-5xl font-figtree">
                  Never Lost,
                </h2>
              </div>
            )}
          </div>
        )}
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
