// ЗАДАНИЕ-1
// Сделайте функцию, которая параметром принимает число, а
// возвращает квадратный корень из этого числа. С помощью этой
// функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.
// РЕШЕНИЕ
// function squareRoot(num, numI) {
//   let answer = Math.sqrt(num);
//   let answerI = Math.sqrt(numI);
//   let sumAnsw = answer + answerI;
//   return sumAnsw;
// }
// let squarNum = Number(prompt(`Введите 1 число для возведения и сложения`));
// let squarNumI = Number(prompt(`Введите 2 число для возведения и сложения`));
// // console.log(squareRoot(squarNum, squarNumI));
// // ОКРУГЛЕНИЕ ЧИСЛА В > СТОРОНУ
// console.log(Math.round(squareRoot(squarNum, squarNumI)));


// ЗАДАНИЕ-2
// Создайте функцию, которая находит минимальное число из 2х
// передаваемых аргументов функции
// РЕШЕНИЕ
// function minNumber(num, numI) {
//   if (num < numI) {
//     console.log('Первое число минимальное');
//   } else if (num > numI) {
//     console.log('Второе число минимальное');
//   } else  {
//     console.log('Ниодно число не подошло');
//   }
// }
// let minNum = Number(prompt('Введите 1 число для проверки'));
// let minNumI = Number(prompt('Введите 2 число для проверки'));
// console.log(minNumber(minNum, minNumI));
