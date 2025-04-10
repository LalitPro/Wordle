import React from "react";
import { Link } from "react-router-dom";

function Guide() {
  return (
    <div className="relative max-w-3xl p-6 mx-auto text-gray-100">
      {/* Go Back Button */}
      <Link
        to="/home"
        className="absolute top-0 right-0 self-center px-4 py-2 mt-4 mr-4 text-sm font-extrabold text-center bg-center bg-cover rounded-full md:px-6 md:py-3 md:text-xl font-figtree text-backblack"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>

      {/* YouTube Video Embed - 9:16 ratio */}
      <div className="flex justify-center items-center mt-16">
        <div className="w-full max-w-[360px] aspect-[9/16] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px]">
          <iframe
            src="https://www.youtube.com/embed/YyHoGIrlAQk?rel=0&start=18&autoplay=1"
            title="How to Play Wordle"
            className="w-full h-full rounded-xl shadow-lg"
            frameBorder="0"
            allow="autoplay; encrypted-media;"
            allowFullScreen
          ></iframe>
        </div>

        <div className="hidden md:flex ml-10 flex-col">
          <section className="mb-6">
            <p className="mb-4">
              Guess the hidden word within six tries! Each guess reveals color
              hints about the letters.
            </p>
            <h2 className="mb-3 text-2xl font-semibold">Game Rules</h2>
            <ul className="ml-6 space-y-2 list-disc">
              <li>Enter a valid five-letter word as your guess.</li>
              <li>
                Letter color meanings:
                <ul className="p-5 ml-6 text-gray-200 px-5 list-disc bg-black rounded-3xl bg-opacity-30">
                  <li>
                    <span className="font-semibold text-green-600">Green:</span>{" "}
                    Correct letter and position.
                  </li>
                  <li>
                    <span className="font-semibold text-yellow-500">
                      Yellow:
                    </span>{" "}
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
      </div>
    </div>
  );
}

export default Guide;
