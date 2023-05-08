$(function () {

  $(".menu a, .go-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 2000);
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false,
  });
  $('.slider-block__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrow: false
        }
      }
    ]
  });
  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');

  });

  var mixer = mixitup('.portfolio__content');
});