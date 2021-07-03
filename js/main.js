(function ($) {
    "use strict";


    // Responsive Menu
    $("#mobile-menu").meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '767'
    });



    $('select').niceSelect();


    // Slider Active
    $('.slider-active').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-long-arrow-left"></i> Prev</button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fa fa-long-arrow-right"></i> Next</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    /*
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    */




    // News Active
    $('.news-active').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-long-arrow-left"></i> Prev</button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fa fa-long-arrow-right"></i> Next</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Testimonial Active
    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-long-arrow-left"></i> Prev</button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fa fa-long-arrow-right"></i> Next</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Client Active
    $('.client-review-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client-nav'
    });
    $('.client-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fa fa-angle-right"></i></button>',
        asNavFor: '.client-review-active',
        dots: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true
    });


    // Brand Active
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-long-arrow-left"></i> Prev</button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fa fa-long-arrow-right"></i> Next</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    // buyer Active
    $('.buyer-active').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-long-arrow-left"></i> Prev</button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fa fa-long-arrow-right"></i> Next</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });



    // Portfolio Active
    $(".portfolio-nav li").on('click', function () {
        $(".portfolio-nav li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".portfolio-active").isotope({
            filter: selector
        });
    });

    jQuery(".portfolio-active").isotope();
    //portfolio masonry
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item'
        }

    });



    /*   Counter up */
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });







})(jQuery);