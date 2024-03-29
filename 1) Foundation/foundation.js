document.addEventListener("DOMContentLoaded", function() {
    var toggleMenu = document.getElementById('toggle-menu');
    var headerCategories = document.querySelector('.header-categories');

    var categories = document.querySelectorAll('.header-categories-list li a');
    categories.forEach(function(category) {
        category.addEventListener('click', function(event) {
            event.preventDefault(); 
            var targetId = category.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (window.innerWidth <= 768) {
                toggleMenu.checked = false;
                headerCategories.style.display = 'none';
            }
            smoothScrollTo(targetElement.offsetTop);
        });
    });

    toggleMenu.addEventListener('change', function() {
        if (toggleMenu.checked) {
            headerCategories.style.display = 'block';
        } else {
            headerCategories.style.display = 'none';
        }
    });

    function smoothScrollTo(targetPosition) {
        var currentPosition = window.pageYOffset;
        var distance = targetPosition - currentPosition;
        var startTime = null;
        var duration = 800;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var ease = easeInOut(timeElapsed, currentPosition, distance, duration);
            window.scrollTo(0, ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOut(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});
