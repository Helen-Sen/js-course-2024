// Завдання 1
// Гра: "Камінь, ножиці, папір"
// Опис гри:
// Користувач грає проти комп'ютера в класичну гру "Камінь, ножиці, папір". Програма запитує вибір користувача, генерує випадковий вибір для комп'ютера, визначає переможця та виводить результат.
// Кроки для виконання завдання:
// 1. Введення вибору користувача:
//    - Використайте `prompt` для запиту вибору користувача (камінь, ножиці, папір).
// 2. Генерація вибору комп'ютера:
//    - Використайте `Math.random()` для випадкового вибору між каменем, ножицями і папером.
// 3. Визначення переможця:
//    - Використайте умовні конструкції для визначення переможця за правилами гри:
//      - Камінь б'є ножиці.
//      - Ножиці б'ють папір.
//      - Папір б'є камінь.
//      - Однакові вибори - нічия.
// 4. Виведення результату:
//    - Використайте `alert` для виведення вибору користувача, вибору комп'ютера та результату гри.
// Додаткові завдання:
// 1. Додати можливість гри кілька раундів з підрахунком загального рахунку.
// 2. Додати можливість користувачеві вийти з гри за допомогою спеціальної команди (наприклад, введення "вихід")

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  while (true) {
    let userChoose = prompt("Enter Rock, Scissors, or Paper. Type 'exit' to quit the game.").trim(); //.trim() removes any extra spaces before or after the text the user entered.
    if (userChoose.toLowerCase() === "exit") {
      alert(`Final Score:\nUser: ${userScore}\nComputer: ${computerScore}`);
      break;
    }
    // userChoose.charAt(0).toUpperCase(): This part takes the first character (charAt(0)) of the userChoose string, converts it to uppercase, and returns it.
    // If the user types "rock" in lowercase, this makes the first letter "R."
    // userChoose.slice(1).toLowerCase(): This takes the rest of the string starting from the second character (slice(1)) and converts it to lowercase.
    userChoose = userChoose.charAt(0).toUpperCase() + userChoose.slice(1).toLowerCase();

    const choices = ["Rock", "Paper", "Scissors"];

    // Math.random(): This function returns a random decimal (floating-point) number between 0 (inclusive) and 1 (exclusive).
    // choices.length: This gives the length of the array, which in this case is 3
    // Math.floor() rounds down any decimal to the nearest whole number
    const computerChoose = choices[Math.floor(Math.random() * choices.length)];

    alert(`User chose: ${userChoose}\nComputer chose: ${computerChoose}`); // \n is an escape character in JavaScript that inserts a newline

    if (userChoose === computerChoose) {
      alert("It's a tie!");
    } else if ((userChoose === "Rock" && computerChoose === "Scissors") || (userChoose === "Scissors" && computerChoose === "Paper") || (userChoose === "Paper" && computerChoose === "Rock")) {
      alert("You win this round!");
      userScore++;
    } else {
      alert("Computer wins this round!");
      computerScore++;
    }
  }
}

playGame();
