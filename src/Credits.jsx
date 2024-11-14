import React from "react";
import { Link } from "react-router-dom";

function Credits() {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-full min-h-full">
      <Link
        to="/home"
        className="absolute top-0 right-0 px-5 py-1 m-1 font-semibold text-white bg-red-400 md:m-2 hover:bg-red-600 hover sm:m-4 rounded-3xl"
      >
        Go Back
      </Link>
      <div className="flex flex-col items-center justify-center w-full gap-5 p-2 m-8 sm:flex-row md:w-3/4 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
        <img
          className="mt-auto shadow-2xl w-60"
          src="./images/icon.png"
          alt="Logo"
        />
        <div>
          <h1 className="text-5xl font-semibold text-green-400 xl:text-7xl">
            WORDLE
          </h1>
          <h2 className="ml-1 text-3xl text-red-400 xl:text-4xl">
            Made by <a href="">Lalit Yadav</a>
          </h2>
          <p className="text-lg xl:text-2xl">
            This is a practice Project. In this project, I have written whole
            code in React. The Game concept is player has to guess the five
            letter word which is randomly selected from an array in coding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Credits;
