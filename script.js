// Custom JavaScript to show sub-menus on hover
document.querySelectorAll('.dropdown-submenu').forEach(function (element) {
    element.addEventListener('mouseover', function () {
        this.querySelector('.dropdown-menu').classList.add('show');
    });

    element.addEventListener('mouseout', function () {
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});