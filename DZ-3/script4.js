// ЗАДАНИЕ-1
// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

// РЕШЕНИЕ
// function daysOfTheWeek(params) {
//   if (params === 1) {
//     console.log('Понедельник');
//   } else if (params === 2){
//     console.log('Вторник');
//   } else if (params === 3){
//     console.log('Среда');
//   } else if (params === 4){
//     console.log('Четверг');
//   } else if (params === 5){
//     console.log('Пятница');
//   } else if (params === 6){
//     console.log('Суббота');
//   } else if (params === 7){
//     console.log('Воскресенье');
//   } else {
//     console.log('Неподходящее число');
//   }
// }
// let dayWeek = Number(prompt('Введите порядковое число дня недели от 1 до 7'));
// console.log(daysOfTheWeek(dayWeek));

// РЕШЕНИЕ ОТ ПРЕПОДАВАТЕЛЯ
// function dayOfWeek(day) {
//   switch (day) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Ошибка";
//       // break;
//   }
// }
// console.log(dayOfWeek(8));

// ЗАДАНИЕ-2
// Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

function date(params) {
  let hours = new Date();
  let date = hours.getHours();
  // let nameDate = alert(`Здравствуте ${params}, текущее время(часы) ${hours} `);
  if (date >= 5 && date < 12) {
    console.log(`Доброе уторо ${params}`);
  } else if (date >= 12 && date < 17) {
    console.log(`Добрый день ${params}`);
  } else if (date >= 17 && date < 22) {
    console.log(`Добрый вечер ${params}`);
  } else if (date >= 22 && date < 24) {
    console.log(`Доброй ночи ${params}`);
  } else if (date >= 0 && date < 5) {
    console.log(`Доброй ночи ${params}`);
  }
}
let nameDate = prompt("Введите имя");
date(nameDate);

// РЕШЕНИЕ ОТ ПРЕПОДАВАТЕЛЯ
