const input = require("fs")
  .readFileSync("./10-input.txt", "utf-8")
  .split("\n")
  .map(e => {
    if (e == "noop") return 0;
    return [0, Number(e.split(" ")[1])];
  })
  .reduce((a, b) => a.concat(b), []);

let x = 1;
cycleMarkers = input.map((e, i) => {
  let char = ".";
  if ([x - 1, x, x + 1].indexOf(i % 40) !== -1) char = "X";
  x += e;
  return char;
});

console.log(
  [
    cycleMarkers.slice(0, 39).join(""),
    cycleMarkers.slice(40, 79).join(""),
    cycleMarkers.slice(80, 119).join(""),
    cycleMarkers.slice(120, 159).join(""),
    cycleMarkers.slice(160, 199).join(""),
    cycleMarkers.slice(200, 239).join(""),
  ].join("\n"),
);
