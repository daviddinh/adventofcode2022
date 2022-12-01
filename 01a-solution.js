let calories = require("fs")
  .readFileSync("./01-input.txt", "utf-8")
  .split("\n\n")
  .map(elf =>
    elf
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b),
  );

console.log(Math.max(...calories));
