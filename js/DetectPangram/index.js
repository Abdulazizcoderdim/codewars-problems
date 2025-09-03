function isPangram(string) {
  const set = new Set(string);

  return [...set].length === 26;
}
