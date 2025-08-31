function duplicateEncode(word) {
  let lower = word.toLowerCase();

  return lower
    .split("")
    .map((w, _, arr) => (arr.indexOf(w) === arr.lastIndexOf(w) ? "(" : ")"))
    .join("");
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
