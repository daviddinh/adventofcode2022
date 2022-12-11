let monkeys = require("fs")
  .readFileSync("./11-input.txt", "utf-8")
  .split("\n\n")
  .map(e => {
    monkey = e.split("\n");
    return {
      id: Number(monkey[0].match(/\d+/g)[0]),
      items: monkey[1].slice(18).split(", ").map(Number),
      op: monkey[2].slice(23).split(" "),
      test: Number(monkey[3].split(" ").slice(-1)),
      ifTrue: Number(monkey[4].split(" ").slice(-1)),
      ifFalse: Number(monkey[5].split(" ").slice(-1)),
      inspections: 0,
    };
  });

let rounds = Array.from({ length: 10000 }, (_, i) => i);

let lcm = monkeys.reduce((a, b) => a * b.test, 1);

rounds.forEach(_ => {
  monkeys.forEach(monkey => {
    let timesToShift = monkey.items.length;
    monkey.items.forEach(item => {
      if (monkey.op[0] == "+") item += Number(monkey.op[1]);
      else if (monkey.op[1] == "old") item *= item;
      else item *= Number(monkey.op[1]);

      item = item % lcm; // Needed tip for this: LCM of all divisibility checks

      if (item % monkey.test == 0) {
        monkeys[monkey.ifTrue].items.push(item);
      } else {
        monkeys[monkey.ifFalse].items.push(item);
      }

      monkey.inspections++;
    });
    Array.from({ length: timesToShift }, (_, i) => i).forEach(_ => {
      monkey.items.shift();
    });
  });
});

console.log(
  monkeys
    .map(e => e.inspections)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a * b, 1),
);
