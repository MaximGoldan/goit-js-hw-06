/*Напиши скрипт, который изменяет цвета фона элемента <body> 
через инлайн стиль при клике на button.change-color и 
выводит значение цвета в span.color.
Для генерации случайного цвета используй 
функцию getRandomHexColor.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
};

refs.buttonEl.addEventListener('click', colorBody);

function colorBody(event) {
  let newColor = getRandomHexColor();
  document.body.classList.add('.span.color');
  refs.bodyEl.style.backgroundColor = newColor;
  refs.spanEl.textContent = newColor;
}
