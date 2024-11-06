// Гра: "Математичний квіз"
// Опис гри:
// Програма генерує випадкові математичні вирази(додавання, віднімання, множення, ділення) та запитує у користувача правильну відповідь.
// Користувач має обмежену кількість спроб, щоб дати правильну відповідь.Програма виводить кількість правильних та неправильних відповідей після завершення гри.
// Кроки для виконання завдання:
// 1. Генерація математичних виразів:
// 	- Використайте Math.random() для генерації двох випадкових чисел і оператора (+, -, *, /).

// 2. Запит правильних відповідей:
// 	- Використайте prompt для запиту відповідей у користувача.

// 3 Перевірка відповідей:
// 	- Використайте умовні конструкції для перевірки правильності відповідей.

// 4 Підрахунок результатів:
// 	- Підрахуйте кількість правильних та неправильних відповідей.

// 5.Виведення результатів:
// 	- Використайте alert для виведення підсумкових результатів.

// Initialize counters for correct and incorrect answers

let correctAnswers = 0;
let incorrectAnswers = 0;
const attempts = 5;  // Set a limit for attempts

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;  // Generates a random number between 1 and max
}

function generateRandomOperator() {
  const operators = ["+", "-", "*", "/"];
  return operators[Math.floor(Math.random() * operators.length)];  // Randomly selects an operator
}

for (let i = 0; i < attempts; i++) {
  // Generate random numbers and an operator
  const num1 = generateRandomNumber(5);
  const num2 = generateRandomNumber(5);
  const operator = generateRandomOperator();

  // Calculate the correct answer
  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = (num1 / num2).toFixed(2);  // Rounds division to 2 decimal places
      break;
  }

  // Prompt the user for an answer
  const userAnswer = prompt(`What is ${num1} ${operator} ${num2}?`);

  // Check if the answer is correct
  if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
    alert("Correct!");
    correctAnswers++;
  } else {
    alert(`Incorrect. The correct answer was ${correctAnswer}.`);
    incorrectAnswers++;
  }
}

// Show the results after the quiz
alert(`Game Over! Correct answers: ${correctAnswers}, Incorrect answers: ${incorrectAnswers}`);
