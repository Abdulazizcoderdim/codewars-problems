function dnaStrand(dna) {
  return dna
    .split("")
    .map((item) => {
      switch (item) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "G":
          return "C";
        case "C":
          return "G";
        default:
          break;
      }
    })
    .join("");
}

console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"
