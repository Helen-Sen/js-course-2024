// Написати програму, яка працює зі списком покупок: додає нові товари, видаляє наявні та виводить список товарів на екран.
// Кроки для виконання завдання:
// 1. Створити масив для зберігання списку покупок:
//    - Початково масив може бути порожнім або містити кілька базових товарів.
// 2. Створити функцію для додавання товару до списку:
//    - Функція приймає назву товару як аргумент і додає його до масиву.
// 3. Створити функцію для видалення товару зі списку:
//    - Функція приймає назву товару як аргумент, знаходить його у масиві та видаляє.
// 4. Створити функцію для виведення поточного списку покупок:
//    - Функція виводить всі елементи масиву у зручному для читання форматі.
// 5. Запропонувати користувачу вибрати дію:
//    - Використати `prompt` для вибору дії: додавання товару, видалення товару або виведення списку.
// 6. Реалізувати вибір користувача:
//    - Викликати відповідні функції на основі вибраної дії.
// 7. Повторити процес, поки користувач не завершить роботу:
//    - Дати можливість користувачу виконувати дії у циклі.

let shoppings = [];

function addProduct(array, product) {
  array.push(product);
  alert(`${product} has been added to your shopping list.`);
}

// // Function to remove specific element from array - my version
// function removeProduct(array, productToRemove) {
//   array.forEach((item, index) => {
//     if (item === productToRemove) {
//       array.splice(index, 1);
//       alert(`${productToRemove} has been removed from your shopping list.`);
//     }
//   });
// }

// Function to remove a product - Chat GPT: indexOf finds the product’s location for removal, and if the product isn’t found, it alerts the user.
function removeProduct(array, productToRemove) {
  const index = array.indexOf(productToRemove);
  if (index >= 0) {
    array.splice(index, 1);
    alert(`${productToRemove} has been removed from your shopping list.`);
  } else {
    alert(`${productToRemove} is not in your shopping list.`);
  }
}

// // array values() method with for loop to print the values of an array. - my version
// function printShoppingList(array) {
//   // Here array.values() method is called.
//   let iterator = array.values();

//   // Here all the elements of the array is being printed.
//   for (let elements of iterator) {
//     alert(elements);
//   }
// }


// Function to print the shopping list - ChatGPT
// array.join(", ") combines all elements in the array into a single string, with each item separated by a comma and a space(", ")
function printShoppingList(array) {
  if (array.length === 0) {
    alert("Your shopping list is empty.");
  } else {
    alert(`Your shopping list:\n${array.join(", ")}`);
  }
}


while (true) {
  let userProduct = prompt("Enter 'exit' to finish, 'print' to show your list, or a product name.").trim();
  if (userProduct.toLowerCase() === "exit") {
    break;
  } else if (userProduct.toLowerCase() === "print") {
    printShoppingList(shoppings);
  } else {
    let chooseAction = prompt("Enter 'add' to add product or 'remove' to remove product").trim();
    if (chooseAction.toLowerCase() === "add") {
      addProduct(shoppings, userProduct);
    } else if (chooseAction.toLowerCase() === "remove") {
      removeProduct(shoppings, userProduct);
    } else {
      alert("Invalid action. Please enter 'add' or 'remove'.");
    }
  }
}


