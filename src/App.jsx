import React from "react";
import { RecoilRoot } from "recoil";
import Wordle from "./wordle/wordle";
import Home from "./Pages/Home";
import Credits from "./Pages/Credits";
import Guide from "./Pages/Guide";
import GameOver from "./Pages/GameOver";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Share from "./Pages/Share";

function App() {
  const path = window.location.pathname;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
      <Navbar />
      <RecoilRoot>
        <div className="flex items-center justify-center flex-grow w-full mb-auto bg-backblue">
          <Routes>
            <Route path="*" element={<Home />}></Route>{" "}
            <Route path="/game" element={<Wordle />}></Route>
            <Route path="/word/:secretWord" element={<Wordle />}></Route>
            <Route path="/guide" element={<Guide />}></Route>
            <Route path="/share" element={<Share />}></Route>
            <Route path="/credits" element={<Credits />}></Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
            <Route path="/over/:xyz" element={<GameOver />}></Route>
          </Routes>
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
