const x = [0, 4, 3];
const y = [...x];

x[0] = 10;
y[0] = 20;
console.log(y);
console.log(x);
