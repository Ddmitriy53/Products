$(document).ready(function () {
  $('.product-info__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider'
  });
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    prevArrow: '<button id="prev" type="button" class="product-slider__button-prev"><svg class="product-slider__prev-img" width="16" height="29"><use href="icons/sprite.svg#arrow"/></svg></button>',
    nextArrow: '<button id="next" type="button" class="product-slider__button-next"><svg class="product-slider__next-img" width="16" height="29"><use href="icons/sprite.svg#arrow"/></svg></button>',
    asNavFor: '.product-info__slider'
  });
  $('.products-main').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    focusOnSelect: true,
    prevArrow: '<button id="cards-prev" type="button" class="cards-slider__button-prev"><svg class="card-slider__prev-img" width="16" height="29"><use href="icons/sprite.svg#arrow"/></svg></button>',
    nextArrow: '<button id="cards-next" type="button" class="cards-slider__button-next"><svg class="card-slider__next-img" width="16" height="29"><use href="icons/sprite.svg#arrow"/></svg></button>',
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesPerRow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});