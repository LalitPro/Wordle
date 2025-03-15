import js from "@eslint/js";

const replaceLetter = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
};

export const HashWord = (word) => {
  const wordArr = word.toLowerCase().split("");

  const reversedWordArr = wordArr.reverse();

  const reversedWordArrAndReplacedLetters = reversedWordArr.map((letter) => {
    const replacedLetter = replaceLetter[letter];
    return replacedLetter;
  });

  const reversedWordArrAndReplacedLetterWord =
    reversedWordArrAndReplacedLetters.join("");

  return reversedWordArrAndReplacedLetterWord;
};

export const DeHashWord = (reversedWordArrAndReplacedLetterWord) => {
  const reversedWordArrAndReplacedLetters =
    reversedWordArrAndReplacedLetterWord.split("");

  const reversedWordArr = reversedWordArrAndReplacedLetters.map((letter) => {
    const replacedLetter = replaceLetter[letter];
    return replacedLetter;
  });

  const WordArr = reversedWordArr.reverse();

  const word = WordArr.join("");

  return word;
};
