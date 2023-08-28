let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar li');
let navbar = document.querySelector('header');

console.log(navbar.offsetHeight);

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY + navbar.offsetHeight;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top <= height) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector(`header navbar a[href* = ${id}]`).classList.add('active');
            });
        };
    });
};