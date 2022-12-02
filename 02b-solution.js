const strategy = require("fs")
  .readFileSync("./02-input.txt", "utf-8")
  .split("\n")
  .map(round => round.split(" "));

const oppShapes = ["A", "B", "C"]; // rock, paper, scissors
const outcomes = ["X", "Y", "Z"]; // lose, draw, win

let scoring = round => {
  opp = oppShapes.indexOf(round[0]);
  outcome = outcomes.indexOf(round[1]);
  me = 0;

  if (outcome == 0) me = (opp + 2) % 3;
  if (outcome == 1) me = opp;
  if (outcome == 2) me = (opp + 1) % 3;

  return me + 1 + outcome * 3;
};

console.log(strategy.map(scoring).reduce((a, b) => a + b));
