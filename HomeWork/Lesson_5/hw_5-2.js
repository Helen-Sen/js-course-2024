// Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник, трикутник). Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.

// Кроки для виконання завдання:
// 1. Створити функцію для обчислення площі та периметру кола:
//    - Функція повинна приймати радіус кола.
//    - Використайте формули: площа = π * r², периметр = 2 * π * r.

// 2. Створити функцію для обчислення площі та периметру прямокутника:
//    - Функція повинна приймати довжину і ширину прямокутника.
//    - Використайте формули: площа = довжина * ширина, периметр = 2 * (довжина + ширина).

// 3. Створити функцію для обчислення площі та периметру трикутника:
//    - Функція повинна приймати довжини трьох сторін трикутника.
//    - Використайте формули: площа = √(p * (p - a) * (p - b) * (p - c)), де p = (a + b + c) / 2, периметр = a + b + c.

// 4. Запросити користувача вибрати фігуру і ввести відповідні параметри:
//    - Використайте `prompt` для запиту типу фігури та відповідних параметрів.

// 5. Обчислити площу та периметр вибраної фігури:
//    - Викликати відповідні функції для обчислення площі та периметру.

// 6. Вивести результати:
//    - Використайте `alert` для виведення результатів обчислень.

function circleAreaAndPerimeter(radius) {
  let circleArea = Math.PI * Math.pow(radius, 2);
  let circlePerimeter = 2 * Math.PI * radius;
  return [circleArea, circlePerimeter];
}

function rectangleAreaAndPerimeter(length, width) {
  let rectangleArea = length * width;
  let rectanglePerimeter = 2 * (length + width);
  return [rectangleArea, rectanglePerimeter];
}

function triangleAreaAndPerimeter(a, b, c) {
  let p = (a + b + c) / 2;
  let triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  let trianglePerimeter = a + b + c;
  return [triangleArea, trianglePerimeter];
}

let userFigure = prompt("Enter circle, rectangle, or triangle").trim(); //.trim() removes any extra spaces before or after the text the user entered.

userFigure = userFigure.charAt(0).toUpperCase() + userFigure.slice(1).toLowerCase();

if (userFigure === "Circle") {
  let radius = +prompt("Enter circle radius");
  let [circleArea, circlePerimeter] = circleAreaAndPerimeter(radius);
  alert(`Circle area: ${circleArea.toFixed(2)}, Circle perimeter: ${circlePerimeter.toFixed(2)}`);
} else if (userFigure === "Rectangle") {
  let length = +prompt("Enter rectangle length");
  let width = +prompt("Enter rectangle width");
  let [rectangleArea, rectanglePerimeter] = rectangleAreaAndPerimeter(length, width);
  alert(`Rectangle area: ${rectangleArea.toFixed(2)}, Rectangle perimeter: ${rectanglePerimeter.toFixed(2)}`);
} else if (userFigure === "Triangle") {
  let a = +prompt("Enter side a of the triangle");
  let b = +prompt("Enter side b of the triangle");
  let c = +prompt("Enter side c of the triangle");
  let [triangleArea, trianglePerimeter] = triangleAreaAndPerimeter(a, b, c);
  alert(`Triangle area: ${triangleArea.toFixed(2)}, Triangle perimeter: ${trianglePerimeter.toFixed(2)}`);
} else {
  alert("Invalid firuge. Please enter circle, rectangle, or triangle.");
}
