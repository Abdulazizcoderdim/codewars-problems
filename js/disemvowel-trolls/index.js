function disemvowel(str) {
  const unli = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const elm = str[i];
    if (!unli.includes(elm.toLowerCase())) {
      result += elm;
    }
  }

  return result;
}

console.log(disemvowel("This website is for losers LOL!"));
//"Ths wbst s fr lsrs LL!"
