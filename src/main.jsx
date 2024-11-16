import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { VolumeProvider } from "./VolumeContext"; // Import the VolumeProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <VolumeProvider>
        <App />
      </VolumeProvider>
    </BrowserRouter>
  </StrictMode>
);
