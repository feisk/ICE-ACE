$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    
    autoWidth: true,
    loop: true,
    center: true,
    responsiveClass: true,
    responsive: {
      1160: {
        loop: false,
        center: false
      }
    }
  });
});

// $(function () {

//   $('.menu__toggle').on('click', function () {
//     $('.main-menu__list--mobile').toggle();
//     $('.main-menu__list--mobile').toggleClass('active');
//     $(this).toggleClass('active');
//   })

// })