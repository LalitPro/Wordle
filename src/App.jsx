import React from "react";
import { RecoilRoot } from "recoil";
import { Wordle } from "./wordle/wordle";

function App() {
  return (
    <RecoilRoot>
      <Wordle />
    </RecoilRoot>
  );
}

export default App;
