import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import VolumeProvider from "./Contexts/VolumeContext.jsx"; // Import the VolumeProvider
import KeyboardProvider from "./Contexts/KeyboardContext.jsx";
import TileProvider from "./Contexts/TileContext.jsx";
import WorldeProvider from "./Contexts/WordleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <VolumeProvider>
        <WorldeProvider>
          <TileProvider>
            <KeyboardProvider>
              <App />
            </KeyboardProvider>
          </TileProvider>
        </WorldeProvider>
      </VolumeProvider>
    </BrowserRouter>
  </StrictMode>
);
