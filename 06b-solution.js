const input = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("")
  .map((e, i, arr) => new Set(arr.slice(i-14, i)).size).indexOf(14)
  
console.log(input);
