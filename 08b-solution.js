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
        cIdx == col.length - 1
      )
        return 0;
      let left = col.slice(0, cIdx).reverse();
      let right = col.slice(cIdx + 1);
      let up = rows
        .map(v => v[cIdx])
        .slice(0, rIdx)
        .reverse();
      let down = rows.map(v => v[cIdx]).slice(rIdx + 1);

      let lView = left.findIndex(t => t >= j) + 1;
      let rView = right.findIndex(t => t >= j) + 1;
      let uView = up.findIndex(t => t >= j) + 1;
      let dView = down.findIndex(t => t >= j) + 1;

      if (lView == 0) lView = left.length;
      if (rView == 0) rView = right.length;
      if (uView == 0) uView = up.length;
      if (dView == 0) dView = down.length;
      return lView * rView * uView * dView;
    });
  })
  .reduce((a, b) => a.concat(b), []);

console.log(Math.max(...input));
