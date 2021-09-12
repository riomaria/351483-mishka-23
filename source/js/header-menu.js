
  (() => {

    const menuButton = document.querySelector('.main-navigation__button');
    const menuList = document.querySelector('.main-navigation__list');
    const menuUserList = document.querySelector('.main-navigation__user-list');

    menuButton.addEventListener('click', () => {
      let expanded = menuButton.getAttribute('aria-expanded') === 'true' || 'false';
      menuButton.setAttribute('aria-axpanded', !expanded);
      menuButton.classList.toggle('main-navigation__button--open');
      menuList.classList.toggle('main-navigation__list--open');
      menuUserList.classList.toggle('main-navigation__user-list--open');
    });
  })();
