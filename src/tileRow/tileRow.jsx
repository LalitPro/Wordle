import { Tile } from "./tile";
import { useTileData } from "./hook";
import { useRef } from "react";

export const TileRow = ({ rowIndex = 0 }) => {
  const tileData = useTileData(rowIndex);
  const inputRefs = useRef([]);

  const handleInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move to the next input field
    }
  };

  const tiles = tileData.map(({ letter, state }, index) => (
    <Tile
      key={`${letter} - ${index}`}
      letter={letter}
      state={state}
      ref={(el) => (inputRefs.current[index] = el)} // Store refs
      onInput={() => handleInput(index)} // Handle input
    />
  ));

  return <div className="flex">{tiles}</div>;
};
