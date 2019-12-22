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

        jQuery(function($) {
            $('input[type="tel"]').mask("+7(999)999-99-99", {
                placeholder: "+7(___)___-__-__"
            });
        });



        (function( $ ){
	
            $(function() {

                $('.js-form-validate').each(function(){
                    var form = $(this),
                        btn = form.find('.callback__submit');
                        form.find('.callback__input').addClass('callback__input--req');

                    function checkInput(){
                        form.find('.callback__input').each(function(){
                            if($(this).val() != ''){
                                $(this).removeClass('callback__input--req');
                            } else {
                                $(this).addClass('callback__input--req');
                            }
                        });
                    }

                    function lightEmpty(){
                        form.find('.callback__input--req').css({'border':'1px solid #ff0000'});
                        setTimeout(function(){
                            form.find('.callback__input--req').removeAttr('style');
                        },3000);
                    }

                    setInterval(function(){
                        checkInput();
                        var sizeEmpty = form.find('.callback__input--req').size();

                        if(sizeEmpty > 0){
                            if(btn.hasClass('js-disabled')){
                                return false
                            } else {
                                btn.addClass('js-disabled')
                            }
                        } else {
                            btn.removeClass('js-disabled')
                        }
                    },3000);

                    btn.click(function(){
                        if($(this).hasClass('js-disabled')){
                            lightEmpty();
                            return false
                        } else {
                            form.submit();
                        }
                    });
                });
            });

        })( jQuery );