const openMenuBtnEl = document.getElementById('open-menu-btn');
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

const handleNavClick = function (e) {
    if (!this.classList.contains('navigation--open')) return;

    if (e.target.closest('.navigation__link') || e.target.closest('.nav-btn--close')) {
        closeNav();
    }
};

const handleNavFocusOut = function (e) {
    const links = this.querySelectorAll('.navigation__link');
    if (links.length === 0) return;

    const lastLink = links[links.length - 1];

    if (e.target === lastLink) {
        closeNav();
    }
};

openMenuBtnEl.addEventListener('click', openNav);
backdropEl.addEventListener('click', closeNav);
navigationMenuEl.addEventListener('click', handleNavClick);
navigationMenuEl.addEventListener('focusout', handleNavFocusOut);
