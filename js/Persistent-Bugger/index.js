function persistence(num) {
  if (num < 10) return 0;

  const result = String(num)
    .split("")
    .reduce((acc, sum) => acc * Number(sum), 1);

  return 1 + persistence(result);
}

console.log(persistence(39)); // 3

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
