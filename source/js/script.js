
(() => {

const menuButton = document.querySelector('.main-navigation__button');
const mainMenu = document.querySelector('.main-navigation');
const menuList = document.querySelector('.main-navigation__list');
const menuUserList = document.querySelector('.main-navigation__user-list');

mainMenu.classList.remove('main-navigation--no-js');
menuList.classList.remove('main-navigation__list--no-js');
menuUserList.classList.remove('main-navigation__user-list--no-js');

menuButton.addEventListener('click', () => {
let expanded = menuButton.getAttribute('aria-expanded') === 'true' || 'false';
menuButton.setAttribute('aria-axpanded', !expanded);
menuButton.classList.toggle('main-navigation__button--open');
menuList.classList.toggle('main-navigation__list--open');
menuUserList.classList.toggle('main-navigation__user-list--open');
});
})();
