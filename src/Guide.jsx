import React from "react";
import { Link } from "react-router-dom";

function Guide() {
  return (
    <div className="relative max-w-3xl p-6 mx-auto text-gray-800">
      <Link
        to="/home"
        className="absolute top-0 right-0 self-center px-2 py-2 -my-3 text-sm font-extrabold text-center bg-center bg-cover rounded-full md:px-20 md:m-5 md:text-xl justify-self-center font-figtree text-backblack min-w-60 max-w-96"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>
      <h1 className="mb-4 text-3xl font-bold">How to Play</h1>
      <section className="mb-6">
        <p className="mb-4">
          Guess the hidden word within six tries! Each guess reveals color hints
          about the letters.
        </p>
        <h2 className="mb-3 text-2xl font-semibold">Game Rules</h2>
        <ul className="ml-6 space-y-2 list-disc">
          <li>Enter a valid five-letter word as your guess.</li>
          <li>
            Letter color meanings:
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-semibold text-green-600">Green:</span>{" "}
                Correct letter and position.
              </li>
              <li>
                <span className="font-semibold text-yellow-500">Yellow:</span>{" "}
                Correct letter, wrong position.
              </li>
              <li>
                <span className="font-semibold text-gray-400">Gray:</span>{" "}
                Incorrect letter.
              </li>
            </ul>
          </li>
          <li>Guess the word in six tries to win!</li>
        </ul>
      </section>
      <h2 className="mb-3 text-2xl font-semibold">Tips & Strategies</h2>
      <section>
        <ul className="ml-6 space-y-2 list-disc">
          <li>Start with common words to reveal key letters.</li>
          <li>Use guesses strategically to confirm letter positions.</li>
        </ul>
      </section>
    </div>
  );
}

export default Guide;
