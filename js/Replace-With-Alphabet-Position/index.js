function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((ch) => ch >= "a" && ch <= "z")
    .map((item) => item.charCodeAt(0) - 96)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); //
