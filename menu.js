const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.lateral-menu');

hamburger.addEventListener('click', () => {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('active');
    };
})