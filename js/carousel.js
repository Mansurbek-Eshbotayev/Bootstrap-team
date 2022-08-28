$('.corusel__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 798,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
});
