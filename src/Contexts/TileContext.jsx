import { createContext, useState } from "react";

export const TileContext = createContext();

const TileProvider = ({ children }) => {
  const [tileRows, setTileRows] = useState([]);
  const [currentTileRowIndex, setCurrentTileRowIndex] = useState(1);

  return (
    <TileContext.Provider
      value={{
        tileRows,
        setTileRows,
        currentTileRowIndex,
        setCurrentTileRowIndex,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};

export default TileProvider;
