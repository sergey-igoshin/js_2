/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

function calc(arg1, operation) {
  const arg2 = 5;
  switch (operation) {
    case '+':
      return arg1 + arg2;
    case '-':
      return arg1 - arg2;
    case '*':
      return arg1 * arg2;
    case '/':
      return arg1 / arg2;
  }
}

const num = 15,
  operation = '-';
console.log(calc(num, operation));
