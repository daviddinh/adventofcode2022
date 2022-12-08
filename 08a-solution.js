const input = require("fs")
  .readFileSync("./08-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split("").map(Number))
  .map((e, rIdx, rows) => {
    return e.map((j, cIdx, col) => {
      if (
        rIdx == 0 ||
        cIdx == 0 ||
        rIdx == rows.length - 1 ||
        cIdx == col.length - 1 ||
        j > Math.max(...col.slice(0, cIdx)) ||
        j > Math.max(...col.slice(cIdx + 1)) ||
        j > Math.max(...rows.map(v => v[cIdx]).slice(0, rIdx)) ||
        j > Math.max(...rows.map(v => v[cIdx]).slice(rIdx + 1))
      )
        return true;
      return false;
    });
  })
  .reduce((a, b) => a.concat(b), [])
  .filter(e => e).length;

console.log(input);
