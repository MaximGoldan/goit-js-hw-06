/*Создай переменную counterValue в которой будет храниться текущее значение 
счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/
//
//------------Первое решение-----------
//
// const counterValue = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
// };

// counterValue.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
//   refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
//   refs.value = refs.container.querySelector('[id = "value"]');
//   return refs;
// };

// counterValue.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     this.increment();
//     this.updateValueUI();
//   });
//   this._refs.decrementBtn.addEventListener('click', () => {
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// counterValue.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// counterValue.prototype.increment = function () {
//   this._value += this._step;
// };
// counterValue.prototype.decrement = function () {
//   this._value -= this._step;
// };

// new counterValue({ rootSelector: '#counter', step: 1 });
//
//---------------Второе решение-----------
//

const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const clickFunction = {
  value: 0,
  incrementMetod() {
    this.value += 1;
    return (valueEl.textContent = this.value);
  },
  decrementMetod() {
    this.value -= 1;
    return (valueEl.textContent = this.value);
  },
};
incrementBtn.addEventListener(
  'click',
  clickFunction.incrementMetod.bind(clickFunction)
);

decrementBtn.addEventListener(
  'click',
  clickFunction.decrementMetod.bind(clickFunction)
);

// incrementBtn.addEventListener(
//   'click',
//   console.log.bind('єта кнопка добавляет +1')
// );

// decrementBtn.addEventListener('click', () => {
//   console.log('єта кнопка удаляет -1');
// });
// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Будет ошибка при вызове функции
