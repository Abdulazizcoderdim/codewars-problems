function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length !== 10) return false;
  let obj = {};

  for (let char of walk) {
    obj[char] = (obj[char] || 0) + 1;
  }

  if (obj["n"] !== obj["s"]) {
    return false;
  } else if (obj["e"] !== obj["w"]) {
    return false;
  } else {
    return true;
  }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
