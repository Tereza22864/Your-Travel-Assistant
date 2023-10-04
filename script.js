let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('showMenu');

    if (nav.classList.contains('showMenu')) {
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
