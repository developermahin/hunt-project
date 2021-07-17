$('.search-icon').click(function(){
    $("#search-section").slideDown()
})
$('.close').click(function(){
    $("#search-section").slideUp()
})

$(".btt").click(function(){
    $("html,body").animate({
        scrollTop:0
    }, 1000)
})

$(window).scroll(function(){
    if($(window).scrollTop() > 180){
        $(".menu").addClass("sticky-menu")
    }
    else{
        $(".menu").removeClass("sticky-menu")
    }

    if($(window).scrollTop() > 600){
        $(".btt").fadeIn()
    }
    else{
        $(".btt").fadeOut()
    }
})

$('.venobox').venobox();

$('.port-slider').slick({
    arrows: false,
    infinite: true,
    speed: 300, 
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});

$('.service-slider').slick({
    infinite: true,
    speed: 300, 
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up service-prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down service-next"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});

$('.testi-img-slider').slick({
    infinite: true,
    speed: 300, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    asNavFor : '.testi-details-slider',
    prevArrow: '<i class="fas fa-chevron-up test-prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down test-next"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            vertical: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$('.testi-details-slider').slick({
    infinite: true,
    speed: 300, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    // vertical: true,
    arrows: false,
    asNavFor: '.testi-img-slider',
    fade: true,
});

$('.team-slider').slick({
    infinite: true,
    speed: 300, 
    slidesToShow: 4,
    slidesToScroll: 1, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.counter').counterUp({
    delay: 10,
    time: 1000,
})

$('.sponsor-slider').slick({
    infinite: true,
    speed: 300, 
    slidesToShow: 5,
    slidesToScroll: 1, 
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});