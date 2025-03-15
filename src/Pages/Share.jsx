import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allWords } from "../wordle/allWords";
import MyLink from "../MyLink";
import { HashWord } from "../hash";

function Share() {
  const [wordToShare, setWordToShare] = useState("");
  const [link, setLink] = useState("");

  const makeLink = () => {
    if (wordToShare.length != 5) {
      alert("Write proper 5 letter word.");
    } else {
      const isvalidWord = allWords.includes(wordToShare.toLowerCase());

      if (!isvalidWord) {
        alert("Invalid Word!");
        setWordToShare("");
      }

      if (isvalidWord) {
        let baseUrl = "worlde4u.netlify.app";
        setLink(baseUrl + "/word/" + HashWord(wordToShare));
      }
    }
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-between w-full h-full mx-auto text-gray-100">
      <Link
        to="/home"
        className="self-center px-2 py-2 m-5 text-sm font-extrabold text-center bg-center bg-cover rounded-full sm:mt-0 md:px-20 md:text-xl justify-self-center font-figtree text-backblack min-w-60 max-w-96"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>

      <div
        className="flex flex-col items-center justify-center gap-2 scale-75 bg-center bg-no-repeat bg-cover md:scale-110 xs:scale-100 h-96 w-96"
        style={{ backgroundImage: 'url("../images/Box.png")' }}
      >
        <label
          htmlFor="wordToShare"
          className="text-xl font-medium md:text-2xl font-figtree text-fontgray"
        >
          Write your word here:
        </label>
        <input
          type="text"
          id="wordToShare"
          className="px-4 py-2 text-lg text-black rounded-full md:text-xl"
          placeholder="Enter Word Here"
          required
          value={wordToShare}
          onInput={(e) => {
            setWordToShare(e.target.value);
          }}
        />
        <button
          className="self-center px-2 py-2 py-3 m-5 text-sm text-2xl font-bold font-extrabold text-center duration-150 bg-center bg-cover rounded-full shadow-2xl hover:scale-90 text-backblack hover:bg-sky-500 sm:mt-0 md:px-20 md:text-xl justify-self-center font-figtree min-w-60 max-w-96"
          style={{ backgroundImage: 'url("../images/Tab.png")' }}
          onClick={makeLink}
        >
          Generate
        </button>
        {link && (
          <div className="text-center text-fontgray">
            <h3 className="font-medium">Tap on link to copy</h3>
            <h2
              className="text-xl font-semibold"
              onClick={() => {
                navigator.clipboard.writeText(link);
                alert("Url Copied Successfully!");
              }}
            >
              {link}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Share;
