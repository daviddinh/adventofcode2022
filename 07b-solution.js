const input = require("fs").readFileSync("./07-input.txt", "utf-8").split("\n");

let tree = { "/": {} };
let currentPath = [];

// 1. Build out the file tree as an object
input
  .filter(e => e !== "$ ls")
  .map(e => e.split(" "))
  .forEach(e => {
    if (e[0] == "$") {
      if (e[2] == "..") {
        currentPath.pop();
      } else {
        currentPath.push(e[2]);
      }
    }
    if (e[0] == "dir") {
      currentPath.reduce((a, b) => (a && a[b]) || {}, tree)[e[1]] = {};
    }
    if (!isNaN(e[0])) {
      currentPath.reduce((a, b) => (a && a[b]) || {}, tree)[e[1]] = Number(
        e[0],
      );
    }
  });

// console.log(tree);

// 2. Get all sizes of the directories
let directorySizes = {};
let currentDirectory = [];

let getDirectorySize = obj => {
  let size = Object.keys(obj).reduce((a, b) => {
    if (isNaN(obj[b])) {
      currentDirectory.push(b);
      return a + getDirectorySize(obj[b]);
    } else {
      return a + obj[b];
    }
  }, 0);
  directorySizes[currentDirectory.join(".")] = size;
  currentDirectory.pop();
  return size;
};

getDirectorySize(tree);
// console.log(directorySizes);

// 3. Find smallest directory to delete.
let diskSpace = 70000000;
let requiredDiskSpace = 30000000;
let totalUsedSpace = directorySizes[""];
let totalRequiredToDelete = Math.abs(
  diskSpace - requiredDiskSpace - totalUsedSpace,
);

smallestDirectoryToDelete = Object.values(directorySizes)
  .sort((a, b) => a - b)
  .find(e => e >= totalRequiredToDelete);
console.log(smallestDirectoryToDelete);
