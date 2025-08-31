function getCount(str) {
  const unli = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (unli.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(getCount("abracadabra"));
