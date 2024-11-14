import React from "react";
import { RecoilRoot } from "recoil";
import { Wordle } from "./wordle/wordle";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const path = window.location.pathname;
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <RecoilRoot>
        <Routes>
          <Route path="*" element={<Home />}></Route>{" "}
          <Route path="/game" element={<Wordle />}></Route>
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
