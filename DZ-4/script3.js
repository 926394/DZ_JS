// ЗАДАНИЕ-3
let count = 5;
const range = 10;
const arr = [];
let sum = 0;
let num = 0;
let min = 0;
for (let i = 0; i < count; i++) {
  arr[i] = Math.floor(Math.random() * range);
  // Сложение элементов массива
  sum += arr[i];
  // поиск минимального числа
  min = Math.min.apply( Math, arr );
  // поиск цифры
  num = arr[i]; 
  if (num === 3){
    console.log(`В массиве есть цифра ${num}`);
  }
}
console.log(`Созданный массив: ${arr}, Сумма чисел массива = ${sum}, Минимальное число ${min}`);