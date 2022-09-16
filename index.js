const menu1toggle = document.getElementById('menu-1-toggle');
const menu1 = document.getElementById('menu-1');
const menu2toggle = document.getElementById('menu-2-toggle');
const menu2 = document.getElementById('menu-2');
const menuToggleMobile = document.getElementById('menu-toggle-mobile');
const navContentContainer = document.getElementById('nav-content-container');
const navContent = document.getElementById('nav-content');
const arrowIcon1 = document.getElementById('arrow-icon-1');
const arrowIcon2 = document.getElementById('arrow-icon-2');
const shade = document.getElementById('shade');

let opened = {
  menuMobile: false,
  menu1: false,
  menu2: false,
}

menu1toggle.addEventListener('click', () => {  
  opened.menu1 = !opened.menu1;
  if (opened.menu1) {
    menu1.classList.remove('menu-1-collapsed');
    arrowIcon1.classList.add('arrow-icon-up');
  } else {
    menu1.classList.add('menu-1-collapsed');
    arrowIcon1.classList.remove('arrow-icon-up');
  }
})

menu2toggle.addEventListener('click', () => {
  console.log('clicked');
  opened.menu2 = !opened.menu2;
  if (opened.menu2) {
    menu2.classList.remove('menu-2-collapsed');
    arrowIcon2.classList.add('arrow-icon-up');
  } else {
    menu2.classList.add('menu-2-collapsed');
    arrowIcon2.classList.remove('arrow-icon-up');
  }
})

menuToggleMobile.addEventListener('click', () => {
  console.log('clicked');
  opened.menuMobile = !opened.menuMobile;
  if (opened.menuMobile) {
    menuToggleMobile.src = "/images/icon-close-menu.svg";
    navContentContainer.classList.remove('nav-hidden');
    navContent.classList.remove('nav-hidden');
    shade.classList.add('shade-active');
  } else {
    menuToggleMobile.src = "/images/icon-menu.svg";
    navContentContainer.classList.add('nav-hidden');
    navContent.classList.add('nav-hidden');
    shade.classList.remove('shade-active');
  }
})