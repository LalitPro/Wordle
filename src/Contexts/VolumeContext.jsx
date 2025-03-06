import React, { createContext, useContext, useState } from "react";

export const VolumeContext = createContext();

export const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(+localStorage.getItem("volume") || 1); // Default volume is 1 (full volume)
  localStorage.setItem("volume", volume);

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

export default VolumeProvider;

export const useVolume = () => {
  const volume = +localStorage.getItem("volume");
  return volume;
};
