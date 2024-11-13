import "./tile.css";

export const Tile = ({ letter = "", state = "pending" }) => {
  return (
    <div
      className="tile w-14 h-14  flex items-center justify-center p-2 m-px text-xl font-semibold text-center border-0 rounded-md sm:p-4 sm:m-0.5 md:p-6 md:m-1 xl:text-2xl xl:p-5 text-lightwhite bg-lightgrayed keyboard-key"
      data-state={state}
    >
      {letter}
    </div>
  );
};
