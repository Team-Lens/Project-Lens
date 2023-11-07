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

// Select your HTML elements
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const lightModeBtns = document.querySelectorAll(".light-mode-btn");
const darkModeBtns = document.querySelectorAll(".dark-mode-btn");

// Function to toggle between light and dark modes
function toggleMode(isLightMode) {
  if (isLightMode) {
    document.documentElement.style.setProperty('--bg-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#222327');
    
    if (document.body.id === 'register-page') {
      document.documentElement.style.setProperty('--background-image', 'var(--background-image-light)');
    } else if (document.body.id === 'login-page') {
      document.documentElement.style.setProperty('--background-image', 'var(--background-image-login-light)');
    }
  } else {
    document.documentElement.style.setProperty('--bg-color', '#222327');
    document.documentElement.style.setProperty('--text-color', '#fff');
    
    if (document.body.id === 'register-page') {
      document.documentElement.style.setProperty('--background-image', 'var(--background-image-dark)');
    } else if (document.body.id === 'login-page') {
      document.documentElement.style.setProperty('--background-image', 'var(--background-image-login-dark)');
    }
  }
}

// Check local storage for the user's preference
const savedMode = localStorage.getItem('mode');

// Initialize the mode based on the user's preference or default to light mode
const isLightMode = savedMode === 'light';
toggleMode(isLightMode);

// Set the active button based on the mode preference
if (isLightMode) {
  lightModeBtns.forEach(btn => {
    btn.style.display = "none";
  });
  darkModeBtns.forEach(btn => {
    btn.style.display = "flex";
  });
} else {
  lightModeBtns.forEach(btn => {
    btn.style.display = "flex";
  });
  darkModeBtns.forEach(btn => {
    btn.style.display = "none";
  });
}

// Add event listeners to your mode buttons
lightMode.addEventListener('click', () => {
  toggleMode(true);
  localStorage.setItem('mode', 'light');
  lightModeBtns.forEach(btn => {
    btn.style.display = "none";
  });
  darkModeBtns.forEach(btn => {
    btn.style.display = "flex";
  });
});

darkMode.addEventListener('click', () => {
  toggleMode(false);
  localStorage.setItem('mode', 'dark');
  lightModeBtns.forEach(btn => {
    btn.style.display = "flex";
  });
  darkModeBtns.forEach(btn => {
    btn.style.display = "none";
  });
});
