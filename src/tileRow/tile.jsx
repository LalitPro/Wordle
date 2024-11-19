import "./tile.css";

export const Tile = ({ letter = "", state = "pending" }) => {
  let tileClass = `tile w-14 h-14 flex items-center justify-center border-0 rounded-md  m-px text-xl font-semibold text-center sm:m-0.5 md:m-1 xl:text-2xl text-fontgray bg-lightgrayed keyboard-key `;

  if (state == "correct") {
    tileClass += " bg-green-500 text-white ";
  } else if (state == "partially") {
    tileClass += " bg-yellow-500 text-white ";
  } else if (state == "incorrect") {
    tileClass += " bg-gray-500 text-white ";
  }

  return (
    <input
      type="text"
      value={letter}
      maxLength={1}
      data-state={state}
      onInput={(tileClass += " bounce-animation")}
      className={tileClass + " transition-all duration-300 ease-in-out "}
    />
  );
};
