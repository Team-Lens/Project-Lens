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
        // If yes, show the button
        gotopbtn.style.display = 'block';
    } else {
        // If not, hide the button
        gotopbtn.style.display = 'none';
    }
});
