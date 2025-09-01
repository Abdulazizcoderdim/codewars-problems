function narcissistic(value) {
  const digit = value.toString().split("").length;
  console.log(digit);

  return (
    value
      .toString()
      .trim()
      .split("")
      .map((char) => Number(char) ** digit)
      .reduce((acc, sum) => acc + sum, 0) === value
  );
}

console.log(narcissistic(153)); // ture
// 1+125+27= 153
