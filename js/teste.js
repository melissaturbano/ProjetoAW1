

function mudar() {
    $("#teste").css("color", "red");
}/*


/*$('.galeria').slick({
   /* slidesToShow:3,
    slidesToScroll: 2
});


$('.galeria').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });*/

  $('.galeria').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    focusOnSelect: true,


    infinite: true
  });


  /*$('.galeria').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.galeria2'
  });
  $('.galeria2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.galeria',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });*/