        var menuButton = document.querySelector('.js-toggle-menu');
        var menuMobile = document.querySelector('.js-navigation-mobile');

        menuButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            menuMobile.classList.toggle('js-navigation-able');
            menuButton.classList.toggle('js-menu-close');
        });

        var connectionButton = document.querySelector('.js-connection-button');
        var modal = document.querySelector('.js-modal');
        var closeButton = document.querySelector('.js-close-form');

        connectionButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            modal.classList.add('js-show');
        });

        closeButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            modal.classList.remove('js-show');
        });

        window.addEventListener('keydown', function(evt) {
            if (evt.keyCode === 27) {
                modal.classList.remove('js-show');

            }
        });