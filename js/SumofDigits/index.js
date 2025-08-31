// s = (n * (n + 1)) / 2;

function digitalRoot(n) {
  if (n < 10) return n;

  let sum = String(n)
    .split("")
    .reduce((acc, sum) => acc + Number(sum), 0);

  return digitalRoot(sum);
}

console.log(digitalRoot(16));
