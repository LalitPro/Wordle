import { TileRow } from "../tileRow/tileRow";
import { useTileRowIds } from "./hooks";
import { useKeyboardInput } from "./hooks";
import { useOnSubmitGuess } from "./hooks";
import { useCurrentTileRow } from "../tileRow/hook";

export const GameBoard = () => {
  const tileRowIds = useTileRowIds();
  const onSubmitGuess = useOnSubmitGuess();
  const [tileRow, setTileRow] = useCurrentTileRow();

  useKeyboardInput(onSubmitGuess, setTileRow);

  const rows = tileRowIds.map((id) => (
    <TileRow key={`key-${id}`} rowIndex={id} />
  ));

  return <div className="flex flex-col items-center">{rows}</div>;
};
