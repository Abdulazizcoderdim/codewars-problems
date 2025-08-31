function findOutlier(integers) {
  const majorityIsEven =
    [integers[0], integers[1], integers[2]].filter((num) => num % 2 === 0)
      .length >= 2;

  return integers.find((num) => (num % 2 === 0) !== majorityIsEven);
}

console.log(findOutlier([0, 1, 2])); // 1
