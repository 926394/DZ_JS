// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// РЕШЕНИЕ
function cubing(numI, numII) {
  let numberI = Math.pow(numI, 3);
  let numberII = Math.pow(numII, 3);
  let sumWork = numberI + numberII;
  return sumWork;

}

let num = Number(prompt('Введите 1 число для возведения в куб и сложения'));
let num0 = Number(prompt('Введите 2 число для возведения в куб и сложения'));

console.log(cubing(num, num0));