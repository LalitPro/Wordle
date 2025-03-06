import React, { createContext, useState } from "react";

export const KeyboardContext = createContext();

const KeyboardProvider = ({ children }) => {
  const [keyboardState, setKeyboardState] = useState({});

  return (
    <KeyboardContext.Provider value={{ keyboardState, setKeyboardState }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardProvider;
