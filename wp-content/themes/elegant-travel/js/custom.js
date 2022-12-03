jQuery(document).ready(function ($) {

    var slider_auto, slider_loop, rtl;

    if (blossom_floral_data.auto == '1') {
        slider_auto = true;
    } else {
        slider_auto = false;
    }

    if (blossom_floral_data.loop == '1') {
        slider_loop = true;
    } else {
        slider_loop = false;
    }

    if (blossom_floral_data.rtl == '1') {
        rtl = true;
    } else {
        rtl = false;
    }

       /* secondary Navigation
    --------------------------------------------- */
    $('.site-header:not(.style-one) .secondary-nav >div').prepend('<button id="closeBttn" class="close-btn"></button>');
    
    $('.secondary-nav .toggle-btn, .secondary-nav .close-btn').on('click', function () {
        var adminbarHeight = $('#wpadminbar').outerHeight();
        if ($('#wpadminbar').length) {
            $('.site-header .secondary-nav > div').animate({
                width: 'toggle',
                'top': adminbarHeight
            });
        } else {
            $('.site-header .secondary-nav > div').animate({
                width: 'toggle'
            });
        }

    });
   

    //banner 2
    $('.site-banner.slider-two .banner-wrapper').owlCarousel({
        items: 1,
        loop: slider_loop,
        rtl: rtl,
        autoplay: slider_auto,
        autoplaySpeed: 800,
        autoplayTimeout: blossom_floral_data.speed,
        animateOut: blossom_floral_data.animation,
        nav: true,
        dots: false,
        responsive: {
            0: {
                nav: true,
                dots: false,
            },
            768: {
                nav: true,
                dots: false,
                margin: 45,
                items: 2,
            },
            992: {
                dots: false,
                nav: true,
                margin: 45,
                items: 2,
            },
            1200: {
                dots: false,
                nav: true,
                margin: 45,
                items: 3,
            },
        }
    });
    if ($('.site-banner.slider-two .banner-wrapper .item').length > 1) {
        $('.site-banner.slider-two .banner-wrapper ').on('translate.owl.carousel', function (event) {
            $(this).find(".owl-item.active").addClass("animated owl-animated-out");
            $(this).find(".owl-item.active").addClass(blossom_floral_data.animation);
        });
        $('.site-banner.slider-two .banner-wrapper ').on('translated.owl.carousel ', function (event) {
            $(this).find(".owl-item.active").removeClass("animated owl-animated-out");
            $(this).find(".owl-item.active").removeClass(blossom_floral_data.animation);
        });
    }
});