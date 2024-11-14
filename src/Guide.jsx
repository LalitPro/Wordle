import React from "react";
import { Link } from "react-router-dom";

function Guide() {
  return (
    <div className="max-w-3xl relative mx-auto p-6 text-gray-800">
      <Link
        to="/home"
        className="absolute top-0 right-0 px-5 py-1 m-1 font-semibold text-white bg-red-400 md:m-2 hover:bg-red-600 hover sm:m-4 rounded-3xl"
      >
        Go Back
      </Link>
      <h1 className="text-3xl font-bold mb-4">How to Play</h1>
      <section className="mb-6">
        <p className="mb-4">
          Guess the hidden word within six tries! Each guess reveals color hints
          about the letters.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Game Rules</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Enter a valid five-letter word as your guess.</li>
          <li>
            Letter color meanings:
            <ul className="list-disc ml-6">
              <li>
                <span className="text-green-600 font-semibold">Green:</span>{" "}
                Correct letter and position.
              </li>
              <li>
                <span className="text-yellow-500 font-semibold">Yellow:</span>{" "}
                Correct letter, wrong position.
              </li>
              <li>
                <span className="text-gray-400 font-semibold">Gray:</span>{" "}
                Incorrect letter.
              </li>
            </ul>
          </li>
          <li>Guess the word in six tries to win!</li>
        </ul>
      </section>
      <h2 className="text-2xl font-semibold mb-3">Tips & Strategies</h2>
      <section>
        <ul className="list-disc ml-6 space-y-2">
          <li>Start with common words to reveal key letters.</li>
          <li>Use guesses strategically to confirm letter positions.</li>
        </ul>
      </section>
    </div>
  );
}

export default Guide;
