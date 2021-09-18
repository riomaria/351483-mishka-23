/* Main-navigation */

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
  menuButton.setAttribute('aria-expanded', !expanded);
  menuButton.classList.toggle('main-navigation__button--close');
  menuList.classList.toggle('main-navigation__list--close');
  menuUserList.classList.toggle('main-navigation__user-list--close');
  });
  })();
