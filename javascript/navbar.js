//Menu Javascript Handling
let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let menuOpen = false;

menu.onclick = () => {
  menuOpen = !menuOpen;
  menu.classList.toggle('bx-x', menuOpen);
  navbar.classList.toggle('open', menuOpen);
};
function closeNavbarOnResize() {
  const screenWidth = window.innerWidth;
  const threshold = 768;
  if (screenWidth > threshold && menuOpen) {
    menuOpen = false;
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
  }
}
window.addEventListener('resize', closeNavbarOnResize);
//Menu Javascript Handling
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          "#loader").style.visibility = "visible";
  } else {
      document.querySelector(
          "#loader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
};
