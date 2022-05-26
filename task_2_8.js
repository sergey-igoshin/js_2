/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow) {
  if (val == 0 || pow == 0) return 'Ошибка ввода!';
  if (pow === 1) return val;
  return val * power(val, pow - 1);
}

const val = 5,
  pow = 2;

console.log(power(val, pow));
