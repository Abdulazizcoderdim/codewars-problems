function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}

console.log(arrayDiff([1, 2], [1])); //  [2]
console.log(arrayDiff([1, 2, 2], [1]));
