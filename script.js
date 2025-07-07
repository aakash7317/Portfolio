 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.nav');
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active');
 }