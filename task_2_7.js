// 7. *Сравнить null и 0. Попробуйте объяснить результат.

const a = null,
  b = 0;

console.log(typeof a); // object
console.log(typeof b); // number

console.log(a == b); // false
console.log(a > b); // false
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // true
