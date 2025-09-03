function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((num) => Number(num) ** 2)
      .join("")
  );
}

console.log(squareDigits(3212));
