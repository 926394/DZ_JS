// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// РЕШЕНИЕ
const addition = (a, b) => {
  return `Результат сложения = ${a + b};`;
};

const difference = (a, b) => {
  if (a > b) {
    return `Результат вычитания = ${a - b};`;
  } else if (b > a) {
    return `Результат вычитания = ${b - a};`;
  }
};

const multiplication = (a, b) => {
  return `Результат умножения = ${a * b};`;
};

const division = (a, b) => {
  return `Результат деления = ${a / b};`;
};

/////////////////////////////// Проверка
// const result1 = addition(2, 5);
// const result2 = difference(9, 25);
// const result3 = multiplication(2, 5);
// const result4 = division(2, 5);
// console.log(`'- '${result2}`);
////////////////////////////////


let numI = Number(prompt("Введите 1 число"));
let numII = Number(prompt("Введите 2 число"));

console.log(addition(numI, numII), division(numI, numII), multiplication(numI, numII), division(numI, numII));

// console.log(addition(numI, numII));
// console.log(difference(numI, numII));
// console.log(multiplication(numI, numII));
// console.log(division(numI, numII));




// console.log(minimumNumber(numI, numII, numIII));
