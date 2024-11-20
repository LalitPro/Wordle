import React from "react";
import "./keyboard.css";
import { BsBackspace } from "react-icons/bs";
import { useVolume } from "../VolumeContext";
import {
  useLetterState,
  useOnBackspaceClicked,
  useOnEnterClicked,
  useOnLetterSelected,
} from "./hooks";

export const PENDING_STATE = "pending";
export const INCORRECT_STATE = "incorrect";
export const PARTIALLY_STATE = "partially";
export const CORRECT_STATE = "correct";

export const KeyboardKey = ({
  state = PENDING_STATE,
  size = "small",
  children,
  ...props
}) => {
  const { volume } = useVolume(); // Get the global volume

  const playClickSound = () => {
    const btnClick = new Audio("../audios/btnClick.mp3");
    btnClick.volume = volume; // Set the global volume
    btnClick.play().catch((error) => {
      console.error("Error playing button click sound:", error);
    });
  };

  return (
    <button
      data-state={state}
      data-size={size}
      {...props}
      onClick={(e) => {
        playClickSound(); // Play sound on click
        props.onClick && props.onClick(e); // Call the original onClick handler, if provided
      }}
      className="key px-2 xs:px-2 xs:py-2 py-1.5 m-1 my-1.5 text-base sm:text-xl hover:bg-deepgray font-semibold text-center border-0 rounded-md sm:p-4 sm:m-0.5 md:p-6 md:m-1 xl:text-2xl xl:p-5 text-lightwhite bg-littlegray keyboard-key"
    >
      {children}
    </button>
  );
};

export const EnterKey = () => {
  const onEnterClicked = useOnEnterClicked();
  return (
    <KeyboardKey size="large" onClick={onEnterClicked}>
      ENTER
    </KeyboardKey>
  );
};

export const BackspaceKey = () => {
  const onBackspaceClicked = useOnBackspaceClicked();
  return (
    <KeyboardKey size="large" onClick={onBackspaceClicked}>
      <BsBackspace size={30} />
    </KeyboardKey>
  );
};

export const LetterKey = ({ letter }) => {
  const state = useLetterState(letter);
  const onLetterSelected = useOnLetterSelected(letter);
  return (
    <KeyboardKey size="small" state={state} onClick={onLetterSelected}>
      {letter}
    </KeyboardKey>
  );
};
