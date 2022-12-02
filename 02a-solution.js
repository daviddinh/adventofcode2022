const strategy = require("fs")
  .readFileSync("./02-input.txt", "utf-8")
  .split("\n")
  .map(round => round.split(" "));

// scores:{
//  win: 6, draw: 3, loss: 0,
//  rock: 1, paper: 2, scissors: 3 }

const oppShapes = ["A", "B", "C"];
const myShapes = ["X", "Y", "Z"];

let scoring = round => {
  opp = oppShapes.indexOf(round[0]);
  me = myShapes.indexOf(round[1]);
  score = 0;

  if (me == opp) score = 3;
  if (me == (opp + 1) % 3) score = 6;

  return me + 1 + score;
};

console.log(strategy.map(scoring).reduce((a, b) => a + b));
