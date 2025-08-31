// function highAndLow(numbers) {
//   return `"${Math.max(...numbers.split(" "))} ${Math.min(
//     ...numbers.split(" ")
//   )}"`;
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"

function duplicateEncode(word) {
  let lower = word.toLowerCase();

  return lower
    .split("")
    .map((w, _, arr) => (arr.indexOf(w) === arr.lastIndexOf(w) ? "(" : ")"))
    .join("");
}

console.log(duplicateEncode("Success")); //
