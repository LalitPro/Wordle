import React from "react";
import { Link } from "react-router-dom";
import MyLink from "./MyLink";

function Home() {
  if (!localStorage.getItem("userName")) {
    let value;
    function setUsername() {
      value = document.getElementById("userName").value;
      console.log(value);
      if (value == "") {
        document.getElementById("userName").placeholder = "Enter Something";
      } else {
        localStorage.setItem("userName", value);
        window.location.pathname = "game";
      }
    }

    return (
      <div className="flex flex-col items-center w-full gap-5 text-5xl md:gap-9 p-6">
        <div className="flex flex-col justify-center items-center bg-sky-200 w-96 lg:w-1/2 p-10 clip-path-box">
          <h1 className="text-5xl lg:text-7xl font-figtree text-fontgray font-extrabold">
            Welcome to Wordle,
          </h1>

          <div>
            <div className="flex flex-col gap-3 mb-4 md:gap-7">
              <label
                htmlFor="userName"
                className="text-2xl lg:text-5xl font-figtree text-fontgray font-medium"
              >
                What's your Good Name?
              </label>
              <input
                type="text"
                id="userName"
                className="px-4 py-2 text-2xl text-black rounded-full"
                placeholder="Enter Your Name Here"
                value={value}
              />
            </div>

            <button
              className="bg-cover bg-center self-center text-backblack rounded-full px-20 min-w-60 max-w-96"
              style={{ backgroundImage: 'url("../images/btn.png")' }}
              onClick={setUsername}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    const userName = localStorage.getItem("userName");
    return (
      <div className="flex flex-col w-full gap-5 text-5xl md:gap-9 p-16">
           <h1 className="text-5xl text-center font-figtree text-white font-extrabold">
        WORDLE
      </h1>
        <div className="flex flex-col justify-end text-4xl md:text-6xl sm:items-end sm:justify-center sm:flex-row">
          <h1 className="text-5xl  text-fontgray md:text-7xl">
            Hi, {userName}
          </h1>
        </div>
        <div>
          <div className="flex flex-col gap-3 mb-4 md:gap-7">
            <MyLink to="/game">New Game</MyLink>
            <MyLink to="/guide">How To Play</MyLink>
            <MyLink to="/credits">Credits</MyLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
