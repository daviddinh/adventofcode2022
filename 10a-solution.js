const input = require("fs")
  .readFileSync("./10-input.txt", "utf-8")
  .split("\n")
  .map(e => {
    if (e == "noop") return 0;
    return [0, Number(e.split(" ")[1])];
  })
  .reduce((a, b) => a.concat(b), []);

let cycleMarkers = [
  input.slice(0, 19).reduce((a, b) => a + b, 1) * 20,
  input.slice(0, 59).reduce((a, b) => a + b, 1) * 60,
  input.slice(0, 99).reduce((a, b) => a + b, 1) * 100,
  input.slice(0, 139).reduce((a, b) => a + b, 1) * 140,
  input.slice(0, 179).reduce((a, b) => a + b, 1) * 180,
  input.slice(0, 219).reduce((a, b) => a + b, 1) * 220,
];
console.log(cycleMarkers.reduce((a, b) => a + b, 0));
