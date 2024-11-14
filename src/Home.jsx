import React from "react";
import { Navigate } from "react-router-dom";

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
      <div className="flex flex-col gap-5 p-2 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
        <div className="flex flex-col justify-end sm:items-end sm:justify-center sm:flex-row">
          <h1 className="text-5xl md:text-7xl">Welcome,</h1>
          <h2 className="text-4xl md:text-6xl">to Wordle</h2>
        </div>
        <div>
          <div className="flex flex-col gap-3 mb-4 md:gap-7">
            <label htmlFor="userName" className="text-2xl md:text-5xl">
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
            className="w-full py-3 text-center text-white text-centernt-bold bg-sky-400 rounded-2xl"
            onClick={setUsername}
          >
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    const userName = localStorage.getItem("userName");
    return (
      <div className="flex flex-col w-full gap-5 p-2 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
        <div className="flex flex-col justify-end sm:items-end sm:justify-center sm:flex-row">
          <h2 className="text-4xl md:text-6xl">Hi,</h2>{" "}
          <h1 className="text-5xl md:text-7xl">Lalit</h1>
        </div>
        <div>
          <div className="flex flex-col gap-3 mb-4 md:gap-7">
            <a
              className="w-full py-3 text-2xl font-bold text-center text-white bg-sky-400 rounded-2xl"
              href="/game"
            >
              New Game
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
