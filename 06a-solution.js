const input = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("")
  .map((e, i, arr) => new Set(arr.slice(i-4, i)).size).indexOf(4)

console.log(input);
