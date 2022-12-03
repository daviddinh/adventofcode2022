const backpacks = require("fs")
  .readFileSync("./03-input.txt", "utf-8")
  .split("\n")
  .map((e,i,arr) => {
    if (i % 3 == 0) return([arr[i], arr[i + 1], arr[i + 2]]);
    return;
  })
  .filter(e => e)
  .map(group => {
    let first = group[0].split("");
    let second = group[1].split("");
    let third = group[2].split("");

    return first
      .filter(item => second.indexOf(item) !== -1)
      .filter(item => third.indexOf(item) !== -1)[0];
  })
  .map(item => {
    let itemValue = item.charCodeAt(); // Convert to ascii decimal value
    if (itemValue < 91) return itemValue - 38;
    return itemValue - 96;
  });

console.log(backpacks.reduce((a, b) => a + b));
