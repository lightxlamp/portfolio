$(document).ready(function() {
    $(".project__name").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        asNavFor: ".project__image, .project__details",
        arrows: false,
        infinite: true,
        fade: true
    }),
    
    $(".project__image").slick({
      autoplay: false,
      asNavFor: '.project__details, .project__name',
      //dots: true,
      //fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }),

    $(".project__details").slick({
        autoplay: false,
        dots: false,
        arrows: false,
        infinite: true,
        fade: true 
    }),

    $(".technologies").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
  });
