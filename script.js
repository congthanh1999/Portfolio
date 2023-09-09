let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');
let header = document.querySelector('header');

let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY + header.offsetHeight;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector(`.header .navbar a[href*=${id} ]`).classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

