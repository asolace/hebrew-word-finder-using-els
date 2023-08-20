// Helper function to filter out only Hebrew letters
export const onlyHebrew = (str: string) => {
  const hebrewRegex = /[\u0590-\u05FF]/;
  return Array.from(str)
    .filter((char) => hebrewRegex.test(char))
    .join("");
};
