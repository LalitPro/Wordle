import { TileRow } from "../tileRow/tileRow";
import { useTileRowIds } from "./hooks";

export const GameBoard = () => {
  const tileRowIds = useTileRowIds();

  const rows = tileRowIds.map((id) => (
    <TileRow key={`key-${id}`} rowIndex={id} />
  ));

  return <div className="flex flex-col items-center">{rows}</div>;
};
