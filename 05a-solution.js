const input = require("fs")
  .readFileSync("./05-input.txt", "utf-8")
  .split("\n\n");

let stacks = [];

input[0]
  .split("\n")
  .map(e => {
    return e
      .split("")
      .map((_, j, arr) => {
        if (j % 4 == 0) return [arr[j], arr[j + 1], arr[j + 2]];
        return;
      })
      .filter(f => f);
  })
  .reverse()
  .slice(1)
  .map(e =>
    e.map((f, j) => {
      if (f[1] !== " ") {
        stacks[j] ? stacks[j].push(f[1]) : stacks.push([f[1]]);
      }
    }),
  );

input[1]
  .split("\n")
  .map(e => e.split(" "))
  .map(e => [e[1], e[3], e[5]])
  .map(e => e.map(Number))
  .map(e => {
    tempStack = [];
    for (let i = 0; i < e[0]; i++) {
      tempStack.push(stacks[e[1] - 1].pop());
    }
    stacks[e[2] - 1].push(...tempStack);
  });

console.log(stacks.map(e => e.pop()).join(""));
