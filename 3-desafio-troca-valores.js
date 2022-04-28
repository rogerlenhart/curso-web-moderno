let a = 5;
let b = 3;

console.log(`A = ${a} e B = ${b}`);

console.log('Trocando...');

/*
let temp = a;
a = b;
b = a;
*/

[a, b] = [b, a];

console.log(`A = ${a} e B = ${b}`);