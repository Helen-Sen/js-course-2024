// Написати програму, яка аналізує список оцінок студентів і знаходить середній бал, найвищу та найнижчу оцінки.
// Кроки для виконання завдання:

// 1. Створити масив для зберігання оцінок студентів:
//    - Оцінки можуть бути представлені як цілі числа від 0 до 100.

// 2. Створити функцію для обчислення середнього балу:
//    - Функція повинна приймати масив оцінок як аргумент і повертати середнє значення.

// 3. Створити функцію для знаходження найвищої оцінки:
//    - Функція повинна приймати масив оцінок як аргумент і повертати найвищу оцінку.

// 4. Створити функцію для знаходження найнижчої оцінки:
//    - Функція повинна приймати масив оцінок як аргумент і повертати найнижчу оцінку.

// 5. Запросити користувача ввести кілька оцінок і зберегти їх у масив:
//    - Використайте `prompt` для запиту оцінок, можна також згенерувати їх автоматично.

// 6. Обчислити середній бал, найвищу і найнижчу оцінки:
//    - Викликати відповідні функції для обчислень.

// 7. Вивести результати:
//    - Використайте `alert` для виведення середнього балу, найвищої та найнижчої оцінок.

let studentGrades = [];

function average(array) {
  let sum = 0;
  for (const value of array) {
    sum += value;
  }
  return sum / array.length;
}

function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max); // Generates a random number between 0 and max
}

// // Collect multiple grades from the user - varian 1
// let numberOfGrades = parseInt(prompt("How many grades do you want to enter?"), 10); //Using 10 ensures the number is parsed as a standard decimal number
// for (let i = 0; i < numberOfGrades; i++) {
//   let grade = parseFloat(prompt(`Enter grade ${i + 1} (0 to 100):`));
//   studentGrades.push(grade);
// }

// Collect multiple grades automatically
let numberOfGrades = parseInt(prompt("How many grades do you want to generate authomatically?"), 10); //Using 10 ensures the number is parsed as a standard decimal number
for (let i = 0; i < numberOfGrades; i++) {
  let grade = generateRandomNumber(100);
  studentGrades.push(grade);
}


// Calculate and display the results
alert(`Grades for calculate:\n${studentGrades.join(", ")}`);
alert(`Average grade is ${average(studentGrades)}`);
alert(`Max grade is ${max(studentGrades)}`);
alert(`Min grade is ${min(studentGrades)}`);