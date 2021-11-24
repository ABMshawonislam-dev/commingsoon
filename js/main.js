/*-----------------------------------------------------------------------------------

    Template Name: Bsoon v1.0.0 | Responsive Coming Soon Page HTML
    Author: MZ
    Author URI: http://themeforest.net/user/mzworks

-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    /* ------------------------------------------------------------------------ */
    /*  Init body backround type
    /* ------------------------------------------------------------------------ */
    function pageBackground() {
        var body = $('body');
        if (body.hasClass('image-background')) { // Image background
            $.backstretch(['images/backgrounds/bg-1.jpg']); // Replace here Image Background
        } else { // Default background on mobile devices
                $.backstretch(['images/backgrounds/bg-4.jpg']);
            }
        
    }
    pageBackground();

    


  
    /* ------------------------------------------------------------------------ */
    /*  Full page js
    /* ------------------------------------------------------------------------ */
    var isSlideAnimation = false;
    var slideElem = $('.page');

    var prevIndex = 0;
    $('#fullpage').fullpage({
        anchors: ['welcome', 'about', 'services', 'contacts'],
        menu: '#header-nav',
        scrollingSpeed: 600,
        autoScrolling: true,
        scrollBar: true,
        easing: 'easeOutQuart',
        resize: false,
        css3: false,
        responsive: 1000,
        onLeave: function(index, nextIndex, direction) {
            if (!isSlideAnimation) {
                slideElem.addClass('transition');
            }
            isSlideAnimation = true;
        },
        afterLoad: function(anchorLink, index) {
            slideElem.removeClass('transition');
            $('#sidebar-nav li').eq(prevIndex).removeClass('current');
            $('#sidebar-nav li').eq(index - 1).addClass('current');
            isSlideAnimation = false;
            prevIndex = index - 1;
        },
        afterRender: function() {
            isSlideAnimation = false;
        }
    });
    $('.js-to-slide').on('click', function() {
        var elem = $(this),
            slideID = elem.data('slide');
        $.fn.fullpage.moveTo(slideID);
    });

  
    /* ------------------------------------------------------------------------ */
    /*  VERTICAL ALIGMENT BLOCKS
    /* ------------------------------------------------------------------------ */
    function verticalCenterBlock() {
        $('.js-vertical-middle').each(function() {
            var _this = $(this);
            var height = _this.outerHeight();
            _this.addClass('vertical-middle').css('margin-top', -(height / 2));
        });
    }

    $(window).on('resize', verticalCenterBlock);

    $(window).on('load', function() {

        // Remove setTimeout
        setTimeout(function() {
            verticalCenterBlock();
        }, 0);

        /*
            Loader
        */
        $('.loading').fadeOut('300');

        /* Starting Animation on Load */
        $('.onstart').each(function() {
            var elem = $(this);
            if (!elem.hasClass('visible')) {
                var animationDelay = elem.data('animation-delay');
                var animation = elem.data('animation');
                if (animationDelay) {
                    setTimeout(function() {
                        elem.addClass(animation + " visible");
                    }, animationDelay);
                } else {
                    elem.addClass(animation + " visible");
                }
            }
        });

        /* ------------------------------------------------------------------------ */
        /*  Carousel
        /* ------------------------------------------------------------------------ */
        var carousel = $(".owl-carousel");
        if (carousel.length) {
            carousel.each(function() {
                var currentCarousel = $(this);
              
                    currentCarousel.owlCarousel({
                        items: 4,
                        dots: false,
                        nav: false,
                        center: false,
                        autoplay: false,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            767: {
                                items: 2
                            },
                            991: {
                                items: 3
                            },
                            1199: {
                                items: 4
                            }
                        }
                    });
                

                // Custom navigation
                var customNav = currentCarousel.next('.owl-carousel-nav');
                if (customNav.length) {
                    customNav.on('click', '.prev', function() {
                        currentCarousel.trigger('prev.owl.carousel');
                    });
                    customNav.on('click', '.next', function() {
                        currentCarousel.trigger('next.owl.carousel');
                    });
                }
            });
        }
    });

})(jQuery);