const backpacks = require("fs")
  .readFileSync("./03-input.txt", "utf-8")
  .split("\n")
  .map(backpack => {
    let mid = backpack.length / 2;
    let first = backpack.slice(0, mid).split("");
    let second = backpack.slice(mid).split("");

    return first.filter(item => second.indexOf(item) !== -1)[0];
  })
  .map(item => {
    let itemValue = item.charCodeAt(); // Convert to ascii decimal value
    if (itemValue < 91) return itemValue - 38;
    return itemValue - 96;
  });

console.log(backpacks.reduce((a, b) => a + b));
