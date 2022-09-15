const menu1toggle = document.getElementById('menu-1-toggle');
const menu1 = document.getElementById('menu-1');
const menu2toggle = document.getElementById('menu-2-toggle');
const menu2 = document.getElementById('menu-2');

let opened = {
  menu1: false,
  menu2: false
}

menu1toggle.addEventListener('click', () => {  
  opened.menu1 = !opened.menu1;
  if (opened.menu1) {
    menu1.classList.remove('menu-1-collapsed');
  } else {
    menu1.classList.add('menu-1-collapsed');
  }
})

menu2toggle.addEventListener('click', () => {
  console.log('clicked');
  opened.menu2 = !opened.menu2;
  if (opened.menu2) {
    menu2.classList.remove('menu-2-collapsed');
  } else {
    menu2.classList.add('menu-2-collapsed');
  }
})