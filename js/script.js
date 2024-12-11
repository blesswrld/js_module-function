"use strict";

const app = '123'; // Создаем константу 'app' и присваиваем ей строковое значение '123'.

const number = 1; // Создаем константу 'number' и присваиваем ей числовое значение 1.

(function () {
      // Немедленно вызываемая функция (Immediately Invoked Function Expression, IIFE).
      let number = 2; // Создаем локальную переменную 'number' внутри функции и присваиваем ей значение 2.
      console.log(number); // Выводим значение локальной переменной 'number' (2) в консоль.
      console.log(number + 3); // Выводим результат сложения локальной переменной 'number' и числа 3 (5).
}());

console.log(number);
// Выводим значение глобальной переменной 'number' (1) в консоль.
// Локальная переменная 'number' из IIFE не влияет на глобальную переменную.

const user = (function () {
      // Создаем IIFE для создания модуля user.
      const privat = function () {
            // Приватная функция, недоступная вне этой области видимости.
            console.log('I am privat!'); // Выводит сообщение "I am privat!" в консоль.
      };

      return {
            sayHello: privat
            // Возвращаем объект с методом 'sayHello', который ссылается на приватную функцию 'privat'.
      };
}());

user.sayHello();
// Вызываем метод 'sayHello' объекта user, который вызывает функцию 'privat'.
// В консоль выводится сообщение "I am privat!".