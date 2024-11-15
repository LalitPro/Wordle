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
          className="mt-auto shadow-2xl rounded-3xl w-60"
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
            letter word randomly selected from an array in coding.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 p-2 m-8 sm:flex-row-reverse md:w-3/4 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
        <div>
          <h1 className="text-5xl font-semibold text-green-400 xl:text-7xl">
            Lalit Yadav
          </h1>
          <h2 className="ml-1 text-3xl text-red-400 xl:text-4xl">About Me.</h2>
          <p className="text-lg xl:text-2xl">
            Hey, I am <span className="font-semibold">Lalit Kumar Yadav</span>.
            I am a student of class 9th in Govt. High School Bhatti. How I Came
            into Coding? At the age of twelve, I started learning Visual Basic.
            I haven't learned it completely. I don't know the fundamentals. I
            participated in the TCS Rural IT Quiz On Sep 30 the quiz happened
            and I became the Runner-up in the Regional Finals of the National
            Level.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 p-2 m-8 sm:flex-row-reverse md:w-3/4 md:gap-9 rounded-3xl sm:p-8 md:p-8 xl:p-16 bg-slate-300">
        <img
          className="px-8 py-16 mt-auto bg-white shadow-2xl shadow-white rounded-3xl bg- w-60"
          src="https://codeyogi.io/logo.png"
          alt="Logo"
        />
        <div>
          <h1 className="text-5xl font-semibold text-green-400 xl:text-7xl">
            Codeyogi
          </h1>
          <h2 className="ml-1 text-3xl text-red-400 xl:text-4xl">
            <a href="https://www.codeyogi.io" target="_blank">
              Join Now
            </a>
          </h2>
          <p className="text-lg xl:text-2xl">
            A few months ago Our SDM ruined an initiative "Coding for All". In
            this initiative, a team of I.I.T. Delhi graduates teaches us Coding
            and more specifically Web development. Here I learned HTML, CSS,
            JavaScript, Tailwind CSS, React, Git, GitHub, and Deployment on
            Netlify my course is not completed and I learned these from the
            course. If you want to Enroll in this Course Join{" "}
            <a href="https://www.codeyogi.io" target="_blank">
              www.codeyogi.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Credits;
