$(document).ready(function(){
    $('.slick--autoplay').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        lazyLoad: 'ondemand',
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 2000
    })
});

$(document).ready(function() {
    $('.full-width-slider').slick({
      arrows: true,
      prevArrow: $('.slick-slides__prev'),
      nextArrow: $('.slick-slides__next'),
      autoplay: true,
      autoplaySpeed: 7000,
      centerMode: true,
      lazyLoad: 'ondemand',
      speed: 1000
    });
});

$(document).ready(function() {
    $('.mobile-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        centerMode: true,
        lazyLoad: 'ondemand',
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
});

$(document).ready(function() {
  $("#loadLast").show();
})