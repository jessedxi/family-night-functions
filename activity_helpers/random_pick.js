const parseArgs = require("minimist");

const args = parseArgs(process.argv.slice(2));

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandom(args.variable));
