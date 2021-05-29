$(function () {


    $('.nav__gamburger').on('click', function (event) {
        $('.nav__gamburger').toggleClass('nav__gamburger-active');
        $('.nav__items').toggleClass('nav__items-active');
        $('body').toggleClass('lock');
    });



    $('.strategie__slider-inner').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        lazyLoad: 'ondemand',
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

