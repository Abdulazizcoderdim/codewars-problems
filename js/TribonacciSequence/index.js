function tribonacci(signature, n) {
  if (n === 0) return [];
  let result = [...signature];

  if (n === 1) return [result[n]];
  if (n === 2) return [result[n]];

  while (result.length < n) {
    result.push(result.slice(-3).reduce((acc, sum) => acc + sum, 0));
  }

  return result;
}

console.log(tribonacci([1, 1, 1], 3));
