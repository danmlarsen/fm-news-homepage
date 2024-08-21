const bodyEl = document.querySelector('body');
const openMenuBtnEl = document.getElementById('open-menu-btn');
const closeMenuBtnEl = document.getElementById('close-menu-btn');
const navigationMenuEl = document.querySelector('.navigation');

const openNav = function () {
    navigationMenuEl.classList.add('navigation--open');

    const backdropEl = document.createElement('div');
    backdropEl.classList.add('backdrop');
    backdropEl.addEventListener('click', closeNav);
    bodyEl.appendChild(backdropEl);
};

const closeNav = function () {
    document.querySelector('.backdrop').remove();
    navigationMenuEl.classList.remove('navigation--open');
};

openMenuBtnEl.addEventListener('click', openNav);
closeMenuBtnEl.addEventListener('click', closeNav);
