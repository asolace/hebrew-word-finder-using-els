const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const highlightSubstring = (search: string, value?: string | null) => {
  if (!value) {
    return "";
  } else if (!search) {
    return value;
  }
  const safeSearch = escapeRegExp(search);
  const chars = value.split(new RegExp(`(${safeSearch})`, "gi"));

  return chars.map((char, i) =>
    char.toLowerCase() === search?.toLowerCase() ? (
      <b key={`${value}:${char}${i}`} style={{ backgroundColor: "yellow" }}>
        {char}
      </b>
    ) : (
      char
    )
  );
};

export const highlightIndexes = (indexes: number[], value?: string | null) => {
  if (!value) {
    return "";
  } else if (!indexes) {
    return value;
  }
  const chars = value.split("");

  return chars.map((char, i) =>
    indexes.includes(i) ? (
      <b key={`${value}:${char}${i}`} style={{ backgroundColor: "yellow" }}>
        {char}
      </b>
    ) : (
      char
    )
  );
};
