// Написати програму, яка обчислює індекс маси тіла (ІМТ) і дає рекомендації на основі отриманого значення.
// Кроки для виконання завдання:

// 1. Створити функцію для обчислення ІМТ:
//    - Формула: Індекс маси тіла розраховується шляхом ділення маси тіла (у кілограмах) на квадрат росту (у метрах квадратних)
// https://moz.gov.ua/uk/jak-viznachti-optimalnu-vagu-formula-indeksu-masi-tila#:~:text=%D0%86%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BC%D0%B0%D1%81%D0%B8%20%D1%82%D1%96%D0%BB%D0%B0%20%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D1%83%D1%94%D1%82%D1%8C%D1%81%D1%8F%20%D1%88%D0%BB%D1%8F%D1%85%D0%BE%D0%BC,%D1%80%D0%BE%D1%81%D1%82%D1%83%20(%D1%83%20%D0%BC%D0%B5%D1%82%D1%80%D0%B0%D1%85%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%B8%D1%85).

// 2. Створити функцію для визначення категорії ІМТ:
//    - Використайте стандартні категорії ВООЗ:
//      - Недостатня вага: ІМТ < 18.5
//      - Нормальна вага: 18.5 ≤ ІМТ < 24.9
//      - Надмірна вага: 25 ≤ ІМТ < 29.9
//      - Ожиріння: ІМТ ≥ 30

// 3. Запросити користувача ввести вагу і ріст:
//    - Використайте `prompt` для запиту ваги та росту.

// 4. Обчислити ІМТ користувача і визначити категорію:
//    - Викликати функції для обчислення ІМТ та визначення категорії.

// 5. Вивести результати:
//    - Використайте `alert` для виведення ІМТ та відповідної категорії.

let weight = parseFloat(prompt("Enter your weight in kg:"));
let height = parseFloat(prompt("Enter your height in meters:"));

let bmi = calculateBMI(weight, height);

let category = getBMICategory(bmi);
alert(`Your BMI is ${bmi.toFixed(2)} and you are categorized as: ${category}`);

function calculateBMI(weight, height) {
  return weight / Math.pow(height, 2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}
