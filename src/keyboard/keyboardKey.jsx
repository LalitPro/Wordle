import React from "react";
import "./keyboard.css";
import { BsBackspace } from "react-icons/bs";
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
  return (
    <button
      data-state={state}
      data-size={size}
      {...props}
      className="p-2 m-px text-xl font-semibold text-center border-0 rounded-md sm:p-4 sm:m-0.5 md:p-6 md:m-1 xl:text-2xl xl:p-5 text-lightwhite bg-lightgrayed keyboard-key"
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
