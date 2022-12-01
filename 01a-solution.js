let calories = require("fs")
  .readFileSync("./01-input.txt", "utf-8")
  .split("\n\n")
  .map((elf) =>
    elf
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b)
  );

console.log(
  calories
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b)
);
