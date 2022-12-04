const sections = require("fs")
  .readFileSync("./04-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(",").map(f => f.split("-").map(Number)))
  .filter(
    e =>
      (e[0][0] >= e[1][0] && e[0][1] <= e[1][1]) ||
      (e[1][0] >= e[0][0] && e[1][1] <= e[0][1]),
  );

console.log(sections.length);
