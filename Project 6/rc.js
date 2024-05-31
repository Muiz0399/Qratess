document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.c-projects-nav__link');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove 'selected' class from all links
            links.forEach(function(item) {
                item.classList.remove('selected');
            });

            // Add 'selected' class to the clicked link
            this.classList.add('selected');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var label = document.querySelector('.c-select__label');
    var menu = document.querySelector('.c-select__menu');

    // Log the selected elements to verify they are correct
    console.log('Label:', label);
    console.log('Menu:', menu);

    label.addEventListener('click', function() {
        // Toggle the 'show' class on the menu
        menu.classList.toggle('show');
        // Log the classList of the menu to verify class toggling
        console.log('Menu classList:', menu.classList);
    });
});

