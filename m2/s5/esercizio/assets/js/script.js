function parallax() {
    var scrollPosition = window.pageYOffset;
    var elements = document.querySelectorAll('[data-type="parallax"]');

    elements.forEach(function (element) {
        var speed = element.getAttribute('data-speed');
        var yPos = -(scrollPosition * speed / 100);
        element.style.backgroundPosition = '50% ' + yPos + 'px';
    });
}

window.addEventListener('scroll', parallax);