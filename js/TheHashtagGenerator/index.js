function generateHashtag(str) {
  if (str.trim().length === 0) return false;

  const result = str
    .trim()
    .split(/\s+/)
    .map((char) => char[0].toUpperCase() + char.slice(1))
    .join("");

  return result.length + 1 > 140 ? false : "#" + result;
}

console.log(generateHashtag("Do   We  have A Hashtag")); // #DoWeHaveAHashtag
