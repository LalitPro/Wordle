import { EnterKey, BackspaceKey, LetterKey } from "./keyboardKey";
import "./keyboard.css";

const topLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomLetters = ["Z", "X", "C", "V", "B", "N", "M"];

export const LetterSetKey = ({ letters }) => {
  return letters.map((letter) => {
    return (
      <LetterKey key={letter} letter={letter}>
        {letter}
      </LetterKey>
    );
  });
};

export const Keyboard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <LetterSetKey letters={topLetters} />
      </div>
      <div className="flex">
        <LetterSetKey letters={middleLetters} />
      </div>
      <div className="flex">
        <EnterKey />
        <LetterSetKey letters={bottomLetters} />
        <BackspaceKey />
      </div>
    </div>
  );
};
