function activateTab(tabElement) {
    var tabItems = document.querySelectorAll('.portfolio-tab li');
    tabItems.forEach(function(item) {
        item.classList.remove('active');
    });
    tabElement.classList.add('active');
}

const gotopbtn = document.getElementById('gotopbtn');
const scrollableElement = document.documentElement;

window.addEventListener('scroll', () => {
  if (scrollableElement.scrollTop > 200) {
    gotopbtn.style.display = 'block';
  } else {
    gotopbtn.style.display = 'none';
  }
});

gotopbtn.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // You can use 'smooth' for a smooth scroll effect
  });
});
