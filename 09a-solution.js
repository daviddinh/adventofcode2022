let h = [0, 0];
let t = [0, 0];
let positionsVisited = new Set();

const input = require("fs")
  .readFileSync("./09-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(" "))
  .map(f => [f[0], Number(f[1])])
  .reduce((a, b) => a.concat([...Array(b[1]).keys()].map(_ => b[0])), [])
  .forEach(step => {
    if (step == "R") h[0]++;
    if (step == "L") h[0]--;
    if (step == "U") h[1]++;
    if (step == "D") h[1]--;

    // Tail is too far away if its X or Y is more than 1 away
    let xTooFar = Math.abs(h[0] - t[0]) > 1;
    let yTooFar = Math.abs(h[1] - t[1]) > 1;
    // Quirk: if the tail is diagonally too far it'll jump twice regardless
    if (Math.abs(h[0] - t[0]) + Math.abs(h[1] - t[1]) > 2) {
      xTooFar = true;
      yTooFar = true;
    }
    if (xTooFar) {
      if (h[0] > t[0]) t[0]++;
      else t[0]--;
    }
    if (yTooFar) {
      if (h[1] > t[1]) t[1]++;
      else t[1]--;
    }
    positionsVisited.add(t.join(","));
  });

console.log(positionsVisited.size);
