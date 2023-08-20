import { onlyHebrew } from "./utils/onlyHebrew";

export const FindELS = (
  text: string,
  skip: number,
  startWord: string
): string => {
  const hebrewText = onlyHebrew(text);
  let sequence = "";
  let startIndex = hebrewText.indexOf(onlyHebrew(startWord));
  if (startIndex === -1) {
    return "Start word not found in text.";
  }
  for (let i = startIndex; i < hebrewText.length; i += skip) {
    if (i >= startIndex + startWord.length) {
      // If we've gone beyond the starting word, reset counters
      i = startIndex - skip; // Subtract skip because the loop increments by skip
      sequence = "";
      continue;
    }
    sequence += hebrewText[i];
  }
  return sequence;
};
