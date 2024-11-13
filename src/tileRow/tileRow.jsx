import { Tile } from "./tile";
import { useTileData } from "./hook";

export const TileRow = ({ rowIndex = 0 }) => {
  const tileData = useTileData(rowIndex);

  const tiles = tileData.map(({ letter, state }, index) => (
    <Tile key={`${letter} - ${index}`} letter={letter} state={state} />
  ));

  return <div className="flex">{tiles}</div>;
};
