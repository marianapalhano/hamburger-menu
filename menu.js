const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.lateral-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
})