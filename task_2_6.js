/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'сумма':
      return arg1 + arg2;
    case 'разность':
      return arg1 - arg2;
    case 'произведение':
      return arg1 * arg2;
    case 'деление':
      return arg1 / arg2;
  }
}

const first_num = 36,
  second_num = 4,
  operation = 'деление';
console.log(mathOperation(first_num, second_num, operation));
