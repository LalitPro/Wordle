import React, { forwardRef } from "react";
import "./tile.css";

export const Tile = forwardRef(
  ({ letter = "", state = "pending", onInput }, ref) => {
    let tileClass = `tile w-14 h-14 flex items-center justify-center border-2 border-ajibblue rounded-md  m-px text-xl font-semibold text-center sm:m-0.5 md:m-1 xl:text-2xl text-fontgray bg-lightgrayed keyboard-key `;

    if (state === "correct") {
      tileClass += " bg-green-500 text-white ";
    } else if (state === "partially") {
      tileClass += " bg-yellow-500 text-white ";
    } else if (state === "incorrect") {
      tileClass += " bg-gray-500 text-white ";
    }

    return (
      <input
        type="text"
        value={letter}
        maxLength={1}
        data-state={state}
        disabled
        ref={ref}
        onInput={onInput} // Pass the onInput event
        className={
          tileClass +
          " transition-all duration-300 ease-in-out bounce-animation "
        }
      />
    );
  }
);
