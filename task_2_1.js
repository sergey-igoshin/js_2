//1. Дан код:
var a = 1,
  b = 1,
  c,
  d;
c = ++a; // предсуффиксный инкремент, увеличивает значение на 1, потом присватвает его переменной "c";
alert(c); // 2
d = b++; // b сначало присваивает значение "d", потом увеличивает на себя на 1;
alert(d); // 1
c = 2 + ++a; // тут "а" уже было равно 2, потом "a" увеличело себя на 1 и прибавилось к 2;
alert(c); // 5
d = 2 + b++; // "b" было равно 2, отсюда "d" = 2 + 2  и потом "b" увеличилось на 1;
alert(d); // 4
alert(a); // 3
alert(b); // 3
//Почему код даёт именно такие результаты?
