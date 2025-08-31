/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    return this.slice(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  },
});
