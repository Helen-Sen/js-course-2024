// Завдання: Написати програму для управління інформацією про студентів у групі.
// Програма повинна дозволяти додавати нових студентів, видаляти студентів і виводити інформацію про всіх студентів.

// Кроки для виконання завдання:

// 1. Створити конструктор або фабричну функцію для створення об'єктів студентів:
// Кожен об'єкт студента повинен містити наступні властивості: ім'я, прізвище, вік, ідентифікаційний номер, середній бал.

// 2.Створити об'єкт для управління групою студентів:
// Цей об'єкт повинен містити масив студентів та методи для додавання, видалення і виведення інформації про студентів.

// 3.Додати метод для додавання нового студента:
// Метод повинен приймати параметри для створення нового об'єкта студента і додавати його до масиву.

// 4.Додати метод для видалення студента:
// Метод повинен видаляти студента за його ідентифікаційним номером.

// 5.Додати метод для виведення списку всіх студентів:
// Метод повинен виводити на екран список студентів із зазначенням всіх їхніх властивостей.

// 6.Додати функціонал для пошуку студента за його ідентифікаційним номером:
// Метод повинен шукати студента в масиві і повертати всю інформацію про нього.

class Student {
  constructor(name, surname, age, id, averageRating) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.id = id;
    this.averageRating = averageRating;
  }
}

let StudentManagenent = {
  students: [],

  // Method to add a new student
  addStudent: function (name, surname, age, id, averageRating) {
    const newStudent = new Student(name, surname, age, id, averageRating); // Use the Student constructor
    this.students.push(newStudent);
    console.log(`Student ${name} ${surname} added.`);
  },

  // Method to remove a student by ID
  removeStudent: function (id) {
    const index = this.students.findIndex((student) => student.id === id); // Find the student by ID
    if (index !== -1) {
      const removedStudent = this.students.splice(index, 1)[0]; // Remove the student
      console.log(`Student ${removedStudent.name} ${removedStudent.surname} removed.`);
    } else {
      console.log("Student not found.");
    }
  },

  // Method to display all students
  displayStudents: function () {
    if (this.students.length === 0) {
      console.log("No students in the group.");
    } else {
      console.log("List of students:");
      this.students.forEach((student) => {
        console.log(`Name: ${student.name}, Surname: ${student.surname}, Age: ${student.age}, ID: ${student.id}, GPA: ${student.averageRating}`);
      });
    }
  },

  // Method to search for a student by ID
  searchStudent: function (id) {
    const student = this.students.find((student) => student.id === id); // Find the student by ID
    if (student) {
      console.log(`Student found: Name: ${student.name}, Surname: ${student.surname}, Age: ${student.age}, ID: ${student.id}, GPA: ${student.averageRating}`);
    } else {
      console.log("Student not found.");
    }
  },
};

// Adding students
StudentManagenent.addStudent("John", "Doe", 20, "001", 8.8);
StudentManagenent.addStudent("Jane", "Smith", 22, "002", 7.0);
StudentManagenent.addStudent("Kate", "Rous", 25, "003", 9.1);

// Displaying all students
StudentManagenent.displayStudents();

// Searching for a student
StudentManagenent.searchStudent("001");

// Removing a student
StudentManagenent.removeStudent("002");

// Displaying updated list
StudentManagenent.displayStudents();
