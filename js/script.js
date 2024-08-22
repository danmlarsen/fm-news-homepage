const openMenuBtnEl = document.getElementById('open-menu-btn');
const closeMenuBtnEl = document.getElementById('close-menu-btn');
const navigationMenuEl = document.getElementById('navigation');
const backdropEl = document.getElementById('backdrop');

const openNav = function (e) {
    e.preventDefault();

    document.body.classList.add('nav-open');
    navigationMenuEl.classList.add('navigation--open');
    backdropEl.classList.add('backdrop--show');
};

const closeNav = function () {
    document.body.classList.remove('nav-open');
    backdropEl.classList.remove('backdrop--show');
    navigationMenuEl.classList.remove('navigation--open');
};

const handleNavFocusOut = function (e) {
    const links = this.querySelectorAll('.navigation__link');
    const lastLink = links[links.length - 1];

    if (e.target === lastLink) {
        closeNav();
    }
};

openMenuBtnEl.addEventListener('click', openNav);
closeMenuBtnEl.addEventListener('click', closeNav);
backdropEl.addEventListener('click', closeNav);
navigationMenuEl.addEventListener('focusout', handleNavFocusOut);
