function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(spinWords("Welcome")); // emocleW
console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
