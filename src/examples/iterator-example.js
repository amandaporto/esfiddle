/* global window */
window.es6Example = window.es6Example || {};
window.es6Example.iterator = {};

window.es6Example.iterator.code =
`let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let v of arr) {
  sum += v;
}

console.log('1 + 2 + 3 + 4 + 5 =', sum);`;

window.es6Example.iterator.display = 'Iterators';
