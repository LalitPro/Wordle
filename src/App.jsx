import React from "react";
import { RecoilRoot } from "recoil";
import { Wordle } from "./wordle/wordle";
import Home from "./Home";
import Credits from "./Credits";
import Guide from "./Guide";
import GameOver from "./GameOver";
import { Route, Routes } from "react-router-dom";

function App() {
  const path = window.location.pathname;
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <RecoilRoot>
        <Routes>
          <Route path="*" element={<Home />}></Route>{" "}
          <Route path="/game" element={<Wordle />}></Route>
          <Route path="/guide" element={<Guide />}></Route>
          <Route path="/credits" element={<Credits />}></Route>
          <Route path="/over/:xyz" element={<GameOver />}></Route>
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
