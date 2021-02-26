$(function () {


    $('.nav__gamburger').on('click', function (event) {
        $('.nav__gamburger').toggleClass('nav__gamburger-active');
        $('.nav__items').toggleClass('nav__items-active');
        $('body').toggleClass('lock');
    });



});

