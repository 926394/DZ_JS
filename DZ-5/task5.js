const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysWeek = {};

if (en.length === ru.length) {
  for (let i = 0; i < en.length; i++) {
    daysWeek[en[i]] = ru[i];
  }
}

console.log(daysWeek);
