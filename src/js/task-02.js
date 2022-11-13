///---------2-------
/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод 
document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//
const addClass = document.querySelector('#ingredients');

const options = ingredients.map((option) => {
  const link = document.createElement('li');
  link.classList.add('item');
  link.textContent = option;
  addClass.appendChild(link);
});

//

//
// const body = document.querySelector('#ingredients');

// const options = ingredients.map((option) => {
//   const link = document.createElement('li');
//   link.classList.add('item');
//   link.textContent = option;
//   // body.appendChild(link);
// });
//
