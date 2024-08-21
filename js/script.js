const openMenuBtnEl = document.getElementById('open-menu-btn');
const closeMenuBtnEl = document.getElementById('close-menu-btn');
const navigationMenuEl = document.querySelector('.navigation');

openMenuBtnEl.addEventListener('click', e => {
    e.preventDefault();

    navigationMenuEl.classList.add('navigation--open');
});

closeMenuBtnEl.addEventListener('click', e => {
    e.preventDefault();

    navigationMenuEl.classList.remove('navigation--open');
});
