var uniqueInOrder = function (iterable) {
  const unique = new Set(iterable);
  return [...unique];
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
