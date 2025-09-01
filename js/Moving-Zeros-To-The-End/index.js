function moveZeros(arr) {
  const arrNuls = [];
  const arrNotNuls = [];

  for (let num of arr) {
    if (num === 0) {
      arrNuls.push(num);
    } else {
      arrNotNuls.push(num);
    }
  }

  return [...arrNotNuls, ...arrNuls];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
