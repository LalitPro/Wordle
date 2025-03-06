import React, { useContext, useRef } from "react";
import "./keyboard.css";
import { BsBackspace } from "react-icons/bs";
import {
  useLetterState,
  useOnBackspaceClicked,
  useOnEnterClicked,
  useOnLetterSelected,
} from "./hooks";
import { VolumeContext } from "../Contexts/VolumeContext";

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
  const { volume } = useContext(VolumeContext); // Get the global volume

  const playClickSound = () => {
    const btnClick = new Audio("../audios/btnClick.mp3");
    btnClick.volume = volume; // Set the global volume
    btnClick.play().catch((error) => {
      console.error("Error playing button click sound:", error);
    });
  };

  const btnRef = useRef(null);

  const animate = () => {
    try {
      btnRef.current.classlist.add("animate-ping");

      setTimeout(() => btnRef.current.className.remove("animate-ping"), 500);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <button
      data-state={state}
      data-size={size}
      ref={btnRef}
      {...props}
      onClick={(e) => {
        playClickSound();
        animate();
        props.onClick && props.onClick(e); // Call the original onClick handler, if provided
      }}
      className="key scale-90 md:scale-100 px-2 xs:px-2 xs:py-2 py-1.5 m-1 my-1.5 text-base sm:text-xl hover:bg-deepgray font-semibold text-center border-0 rounded-md sm:p-4 sm:m-0.5 md:p-6 md:m-1 xl:text-2xl xl:p-5 text-lightwhite bg-littlegray keyboard-key"
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
