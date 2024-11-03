// Написати програму, яка перевіряє, чи є введений рік високосним.

// Кроки для виконання завдання:

// Введення року:
// - Використайте prompt для введення року користувачем.

// Перетворення введених даних на число:
// - Перетворіть введене значення з рядка на число, використовуючи parseInt або Number.

// Перевірка введених даних:
// - Переконайтеся, що користувач ввів коректне число.

// Перевірка на високосний рік:
// - Використайте умовні оператори для перевірки, чи є рік високосним.

// Виведення результату:
// - Використайте alert для виведення результату.

let year = Number(prompt("enter any year"));

if (typeof year === "number" && !isNaN(year)) {
  if (isLeapYear(year)) {
    alert(year + " is a leap year.");
  } else {
    alert(year + " is not a leap year.");
  }
} else {
  alert("Please enter a valid year");
};

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true; 
  } else {
    return false; 
  }
}


