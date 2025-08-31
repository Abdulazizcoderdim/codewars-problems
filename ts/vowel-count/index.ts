function getCount(str: string) {
  const unli: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (unli.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(getCount("abracadabra"));
