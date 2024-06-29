// Code pour la barre de navigation
const targetDiv = document.body;
window.addEventListener('scroll', function() {
  const windowpos = window.scrollY;
  if (windowpos >= 50) {
    targetDiv.classList.add('scrolling-active');
  } else {
    targetDiv.classList.remove('scrolling-active');
  }
});

const mon_menu = document.getElementById("mon_menu");
const navigateur_mobile = document.getElementById("navigateur_mobile");
const mon_menu_close = document.getElementById("mon_menu_close");
mon_menu.addEventListener("click", function() {
    navigateur_mobile.className = 'menu_open';
});
mon_menu_close.addEventListener("click", function() {
    navigateur_mobile.classList.remove('menu_open');
});

const scroll_top = document.getElementById("scroll_top");

scroll_top.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})