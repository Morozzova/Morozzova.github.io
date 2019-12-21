        var menuButton = document.querySelector('.js-toggle-menu');
        var menuMobile = document.querySelector('.js-navigation-mobile');

        menuButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            menuMobile.classList.toggle('js-navigation-able');
            menuButton.classList.toggle('js-menu-close');
        });

        var connectionButton = document.querySelectorAll('.js-connection-button');
        var modal = document.querySelector('.js-modal');
        var closeButton = document.querySelector('.js-close-form');
        var button;

        for (var i = 0; i < connectionButton.length; i++) {
            button = connectionButton[i];
            button.addEventListener('click', clickHandler);
        }

        function clickHandler(event) {
            event.preventDefault();
            modal.classList.add('js-show');
        }

        function doubleClickHandler(event) {
            this.removeEventListener('click', clickHandler);
        }

        closeButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            modal.classList.remove('js-show');
        });

        window.addEventListener('keydown', function(evt) {
            if (evt.keyCode === 27) {
                modal.classList.remove('js-show');

            }
        });

        var testFrames = document.querySelectorAll('.js-test');
        var previousButton = document.querySelector('.js-button-previous');
        var nextButton = document.querySelector('.js-button-next');


        nextButton.addEventListener('click',
            function(evt) {
                evt.preventDefault();

                for (var i = 0; i < testFrames.length - 1; i++) {
                    if (testFrames[i].classList.contains('js-show')) {
                        testFrames[i].classList.remove('js-show');
                        i++;
                        testFrames[i].classList.add('js-show');
                    }
                }
            });

        previousButton.addEventListener('click',
            function(evt) {
                evt.preventDefault();

                for (var i = 1; i < testFrames.length; i++) {

                    if (testFrames[i].classList.contains('js-show')) {
                        testFrames[i].classList.remove('js-show');
                        i--;
                        testFrames[i].classList.add('js-show');
                    }
                }
            });

        /*        var submit = document.querySelector('.js-submit');

        submit.addEventListener('click',
            function(evt) {
                evt.preventDefault();

        });*/