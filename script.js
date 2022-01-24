let menu1 = document.querySelector('.nav-btn');
let menu2 = document.querySelector('.close-drawer-btn');
function disappear() {
    let menuDis1 = document.querySelector('.navbar');
    menuDis1.classList.toggle('disappear');
    let menuDis2 = document.querySelector('.open-nav');
    menuDis2.classList.toggle('disappear');
    menuDis2.classList.toggle('menu-drawer-height');
    console.log("I am working");
    };

menu1.addEventListener('click',disappear);
menu2.addEventListener('click',disappear);

