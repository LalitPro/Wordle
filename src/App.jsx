import React from "react";
import { RecoilRoot } from "recoil";
import { Wordle } from "./wordle/wordle";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const path = window.location.pathname;
  return (
    <RecoilRoot>
      <Routes>
        <Route path="*" element={<Wordle />}></Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
