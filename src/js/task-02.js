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
let liArray = [];
const options = ingredients.map((option) => {
  const linkItem = document.createElement('li');
  linkItem.classList.add('item');
  linkItem.textContent = option;
  liArray.push(linkItem);
});
addClass.append(...liArray);
