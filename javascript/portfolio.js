function activateTab(tabElement) {
    var tabItems = document.querySelectorAll('.portfolio-tab li');
    tabItems.forEach(function(item) {
        item.classList.remove('active');
    });
    tabElement.classList.add('active');
}