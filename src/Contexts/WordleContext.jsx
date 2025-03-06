import React, { createContext, useState } from "react";

export const WordleContext = createContext();

const WorldeProvider = ({ children }) => {
  const maxTries = 6;
  const [selectedWord, setSelectedWord] = useState({ word: "", length: 5 });

  console.log(selectedWord);

  return (
    <WordleContext.Provider value={{ maxTries, selectedWord, setSelectedWord }}>
      {children}
    </WordleContext.Provider>
  );
};

export default WorldeProvider;
