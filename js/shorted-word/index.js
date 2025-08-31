function findShort(s) {
  const lengths = s.split(" ").map((w) => w.length);
  s.in;
  return lengths.sort((a, b) => a - b)[0];
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
