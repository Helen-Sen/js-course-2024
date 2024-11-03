// Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення.

// Кроки для виконання завдання:

// Отримання поточної дати:
// - Використайте об'єкт Date для отримання поточної дати.

// Визначення дня тижня:
// - Використайте метод getDay() об'єкта Date для отримання дня тижня (0 для неділі, 1 для понеділка і т.д.).

// Виведення результату:
// - Використайте оператор if для визначення дня тижня і виведення відповідного повідомлення.

let day = new Date().getDay();

if (day === 0) {
  alert("Today is Sunday");
} else if (day === 1) {
  alert("Today is Monday");
} else if (day === 2) {
  alert("Today is Tuesday");
} else if (day === 3) {
  alert("Today is Wednesday");
} else if (day === 4) {
  alert("Today is Thursday");
} else if (day === 5) {
  alert("Today is Friday");
} else if (day === 6) {
  alert("Today is Saturday");
}

// Variant_2
let today = new Date().getDay();

switch (today) {
  case 0:
    alert("Today is Sunday");
    break;
  case 1:
    alert("Today is Monday");
    break;
  case 2:
    alert("Today is Tuesday");
    break;
  case 3:
    alert("Today is Wednesday");
    break;
  case 4:
    alert("Today is Thursday");
    break;
  case 5:
    alert("Today is Friday");
    break;
  case 6:
    alert("Today is Saturday");
    break;
}