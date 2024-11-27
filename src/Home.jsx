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
      <div
        style={{ backgroundImage: 'url("../images/Box.png")' }}
        className="relative flex flex-col items-center justify-center gap-5 p-8 py-16 overflow-x-hidden text-5xl bg-left bg-no-repeat bg-cover xs:bg-center xl:px-0 xl:py-24 md:gap-9"
      >
        <div className="flex flex-col items-center justify-center p-10 w-96 lg:w-1/3">
          <h1 className="text-5xl font-extrabold lg:text-7xl font-figtree text-fontgray">
            Welcome to Wordle,
          </h1>

          <div>
            <div className="flex flex-col gap-3 mb-4 md:gap-7">
              <label
                htmlFor="userName"
                className="text-2xl font-medium lg:text-5xl font-figtree text-fontgray"
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
              className="absolute bottom-0 left-0 right-0 self-center px-20 py-2 text-xl font-extrabold bg-center bg-cover rounded-full justify-self-center font-figtree text-backblack min-w-60 max-w-96"
              style={{ backgroundImage: 'url("../images/Tab.png")' }}
              onClick={setUsername}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    const userName = localStorage.getItem("userName");
    return (
      <div className="flex flex-col w-full gap-5 bg-transparent bg-cover text5xl md:p-20 md:px-40 md:gap-9 home-bg">
        <h1 className="text-6xl font-extrabold text-center text-white sm:text-8xl font-figtree">
          WORDLE
        </h1>

        <div className="flex flex-col justify-end text-4xl md:text-6xl sm:items-end sm:justify-center sm:flex-row">
          <h1 className="text-5xl text-center text-fontgray md:text-7xl">
            Hi, <span className="font-bold">{userName}</span>
          </h1>
        </div>
        <div>
          <div className="flex flex-col gap-3 mb-4 md:gap-7">
            <MyLink
              className="self-center px-20 py-2 text-xl font-extrabold bg-center bg-cover rounded-full justify-self-center font-figtree text-backblack min-w-60 max-w-96"
              style={{ backgroundImage: 'url("../images/Tab.png")' }}
              to="/game"
            >
              New Game
            </MyLink>
            <MyLink
              className="self-center px-20 py-2 text-xl font-extrabold bg-center bg-cover rounded-full justify-self-center font-figtree text-backblack min-w-60 max-w-96"
              style={{ backgroundImage: 'url("../images/Tab.png")' }}
              to="/guide"
            >
              How To Play
            </MyLink>
            <MyLink
              className="self-center px-20 py-2 text-xl font-extrabold bg-center bg-cover rounded-full justify-self-center font-figtree text-backblack min-w-60 max-w-96"
              style={{ backgroundImage: 'url("../images/Tab.png")' }}
              to="/credits"
            >
              Credits
            </MyLink>
            <MyLink
              className="self-center px-20 py-2 text-xl font-extrabold bg-center bg-cover rounded-full justify-self-center font-figtree text-backblack min-w-60 max-w-96"
              style={{ backgroundImage: 'url("../images/Tab.png")' }}
              to="/aboutme"
            >
              About Me
            </MyLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
