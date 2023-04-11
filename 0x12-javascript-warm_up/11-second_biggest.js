#!/usr/bin/node

const args = process.argv.slice(2);
const integers = args.map(Number);

if (integers.length === 0) {
  console.log(0);
} else if (integers.length === 1) {
  console.log(0);
} else {
  const sortedIntegers = integers.sort((a, b) => b - a);
  const secondBiggest = sortedIntegers[1];
  console.log(secondBiggest);
}
