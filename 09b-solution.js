let positions = Array.from({ length: 10 }, _ => [0, 0]);
let positionsVisited = Array.from({ length: 10 }, _ => new Set());

require("fs")
  .readFileSync("./09-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(" "))
  .map(f => [f[0], Number(f[1])])
  .reduce((a, b) => a.concat([...Array(b[1]).keys()].map(_ => b[0])), [])
  .forEach(step => {
    if (step == "R") positions[0][0]++;
    if (step == "L") positions[0][0]--;
    if (step == "U") positions[0][1]++;
    if (step == "D") positions[0][1]--;

    positions.forEach((e, i, arr) => {
      if (i == 0) return;
      let xTooFar = Math.abs(arr[i - 1][0] - e[0]) > 1;
      let yTooFar = Math.abs(arr[i - 1][1] - e[1]) > 1;
      if (Math.abs(arr[i - 1][0] - e[0]) + Math.abs(arr[i - 1][1] - e[1]) > 2) {
        xTooFar = true;
        yTooFar = true;
      }
      if (xTooFar) {
        if (arr[i - 1][0] > e[0]) e[0]++;
        else e[0]--;
      }
      if (yTooFar) {
        if (arr[i - 1][1] > e[1]) e[1]++;
        else e[1]--;
      }
      positionsVisited[i].add(e.join(","));
    });
  });

console.log(positionsVisited[9].size);
