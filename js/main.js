$(document).ready(function(){


// sticky-start

  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
     $(".sticky").removeClass("scroll-header");
    }else{
     $(".sticky").addClass("scroll-header");
    }
   });
   


// sticky-end










// baner-slide-start





$('.baner-acitve').slick({
    
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false


});
              

// baner-slide-end

// ttm-slide-start

$('.ttm-activ').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    arrows:false
  });
              

// ttm-slide-end


// grop-slide-start



$('.grop-activ').slick({
 
  infinite: true,
  arrows:false,
    autoplay: true,
    speed:  400,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
    autoplay: true,
    slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// grop-slide-end



// counter-start
$('.counter').counterUp({
  delay: 10,
  time: 2000
});

// counter-end



// scrollUp-start


$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fa-solid fa-circle-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});



// scrollUp-start


// magnificPopup-start

 
$('.video-popup').magnificPopup({
  type: 'image'
  // other options
});


// magnificPopup-end





// wow-start

new WOW().init();



// wow-end





// meanmenu-start 


jQuery('#mobil-menu').meanmenu({
  meanScreenWidth: "991",
  meanMenuContainer: '.smol-menu'


});

// meanmenu-end 





});

