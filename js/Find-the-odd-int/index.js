const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
