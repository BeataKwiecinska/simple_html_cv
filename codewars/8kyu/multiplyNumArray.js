
array = [3,3,3];
grow = x => x.reduce((c, n) => c * n);

console.log(grow(array));