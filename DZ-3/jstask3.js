// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// РЕШЕНИЕ
function minimumNumber(a, b, c) {
  if (a < b) {
    return "Первое число минимальное";
  } else if (b < c) {
    return "Второе число минимальное";
  } else if (c < a) {
    return "Третье число минимальное";
  }
}
let numI = Number(prompt("Введите 1 число"));
let numII = Number(prompt("Введите 2 число"));
let numIII = Number(prompt("Введите 3 число"));

console.log(minimumNumber(numI, numII, numIII));
