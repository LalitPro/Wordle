import React, { createContext, useContext, useState } from "react";

const VolumeContext = createContext();

export const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(1); // Default volume is 1 (full volume)

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

// Custom Hook to Use Volume Context
export const useVolume = () => {
  return useContext(VolumeContext);
};
