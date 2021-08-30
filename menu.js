const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.lateral-menu');

hamburger.addEventListener('click', () => {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})