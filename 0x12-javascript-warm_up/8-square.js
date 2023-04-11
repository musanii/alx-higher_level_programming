#!/usr/bin/node

const size = process.argv[2];

if (!size || isNaN(parseInt(size))) {
  console.log('Missing size');
} else {
  const side = parseInt(size);
  for (let i = 0; i < side; i++) {
    console.log('X'.repeat(side));
  }
}
