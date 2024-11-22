import React from "react";
import { Link } from "react-router-dom";
import MyLink from "./MyLink";

function Credits() {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-full min-h-full">
      <Link
        to="/home"
        className="absolute top-0 right-0 self-center px-2 py-2 m-1 text-sm font-extrabold text-center bg-center bg-cover rounded-full md:px-20 md:m-5 md:text-xl justify-self-center font-figtree text-backblack min-w-60 max-w-96"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>
      <header class="bg-blue-600 w-full text-white py-4">
        <div class="container mx-auto text-center">
          <h1 class="text-xl md:text-2xl m-5 font-bold">
            Wordle - A React Practice Project
          </h1>
          <p class="text-xs md:text-sm">Created by Lalit Yadav</p>
        </div>
      </header>

      <main class="container mx-auto px-4 py-6">
        <section class="mb-8">
          <h2 class="text-xl font-semibold text-blue-600">Project Overview</h2>
          <p class="mt-2 text-justify">
            This Wordle game is a fun and interactive project developed entirely
            in <strong>React</strong>. The concept is simple yet engaging:
            players must guess a randomly selected five-letter word from a
            predefined array. It's a great way to practice coding and enhance
            problem-solving skills!
          </p>
        </section>

        <MyLink
          className="self-center px-20 py-2 text-xl font-extrabold bg-center bg-cover rounded-full justify-self-center font-figtree text-backblack min-w-60 max-w-96"
          style={{ backgroundImage: 'url("../images/Tab.png")' }}
          to="/aboutme"
        >
          About Me
        </MyLink>
      </main>
    </div>
  );
}

export default Credits;
