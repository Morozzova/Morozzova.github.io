$('.js-slider').slick({
  centerMode: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<button type="button" class="slider__button slider__button--left"><div class="slider__arrow slider__arrow--left"></div></button>',
  nextArrow: '<button type="button" class="slider__button slider__button--right"><div class="slider__arrow slider__arrow--right"></div></button>',
  dots: true,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 778,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 690,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        centerPadding: '14px',
        slidesToShow: 1
      }
    }
  ]
});


