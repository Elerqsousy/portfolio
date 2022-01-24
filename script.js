const menu1 = document.querySelector('.nav-btn');
const menu2 = document.querySelector('.close-drawer-btn');
const navBars = document.querySelector('.open-nav');

function disappear() {
  const menuDis1 = document.querySelector('.navbar');
  menuDis1.classList.toggle('disappear');
  const menuDis2 = document.querySelector('.open-nav');
  menuDis2.classList.toggle('disappear');
  menuDis2.classList.toggle('menu-drawer-height');
}

function closeOnAtag(e) {
  const anchor = e.target.closest('a');
  if (anchor !== null) {
    disappear();
  }
}
menu1.addEventListener('click', disappear);
menu2.addEventListener('click', disappear);
navBars.addEventListener('click', closeOnAtag, false);