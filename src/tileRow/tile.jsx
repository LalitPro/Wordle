import "./tile.css";

export const Tile = ({ letter = "", state = "pending" }) => {
  let tileClass = `tile w-14 h-14 flex items-center justify-center p-2 m-px text-xl font-semibold text-center border-0 rounded-md
     sm:p-4 sm:m-0.5 md:p-6 md:m-1 xl:text-2xl xl:p-5 text-lightwhite bg-lightgrayed keyboard-key `;

  if (state === "correct") {
    tileClass += " bg-green-500 text-white ";
  } else if (state === "partially") {
    tileClass += " bg-yellow-500 text-white ";
  } else if (state === "incorrect") {
    tileClass += " bg-gray-500 text-white ";
  }

  const handleInput = () => {
    tileClass += " bounce-animation";
  };

  return (
    <div
      onInput={handleInput}
      className={tileClass + " transition-all duration-300 ease-in-out "}
      data-state={state}
    >
      {letter}
    </div>
  );
};
