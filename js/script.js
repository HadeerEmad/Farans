$(window).on('load', function() {
    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
        $('body').css({ 'overflow-y': 'auto' });
        animateBox();
    });


    let blockchainSlider = $('.blockchain-owl.owl-carousel');
    if(blockchainSlider.length) {
        blockchainSlider.owlCarousel({
            responsive:{
                0:{
                    items:1,
                    dots: true
                },
                576:{
                    items:2,
                    dots: true
                },
                768:{
                    items:3,
                    dots: true
                },
                992:{
                    items:4,
                    dots: true
                },
                1200:{
                    items:5,
                    dots: false
                }
            },
            margin: 0,
            nav: false,
            loop: true,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false
        });
    }

    let projectsSlider = $('.projects-owl .owl-carousel');
    if(projectsSlider.length) {
        projectsSlider.owlCarousel({
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1200:{
                    items:3
                }
            },
            margin: 30,
            nav: false,
            loop: true,
            dots: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false
        });
    }

    let clientsSlider = $('.clients-owl .owl-carousel');
    if(clientsSlider.length) {
        clientsSlider.owlCarousel({
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                },
                1200:{
                    items:5
                }
            },
            margin: 30,
            nav: false,
            loop: false,
            dots: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false
        });
    }

    let storySlider = $('.story-owl .owl-carousel');
    if(storySlider.length) {
        storySlider.owlCarousel({
            items:1,
            margin: 0,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false
        });
    }
});

$(function() {

    // MENU TOGGLE
    $('.mirror').click(function() {
        $('.navbar-collapse').removeClass('show');
    });

    windowHeight();

    $(window).scroll(function() {
        animateBox();
        windowHeight();

        if($(this).scrollTop() > 100) {
            $('#mainNavbar').addClass('scrolled');
            $('.up-button').removeClass('hide');
        }else {
            $('#mainNavbar').removeClass('scrolled');
            $('.up-button').addClass('hide');
        }
    });

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();


    // SMOOTH SCROLL
    $('.smooth-a, .up-button').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 75
        }, 1000);
        return false;
    });


    // COUNTER
    if($('#counter').length) {
        var a = 0;
        $(window).scroll(function () {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({countNum: $this.text()}).animate({
                        countNum: countTo
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
                a = 1;
            }
        });
    }


    // FAQ

    $('.faq-body').slideUp(0);
    $('.faq-head.active').next('.faq-body').slideDown(0);
    $('.faq-head').click(function () {
        $('.faq-body').slideUp();
        $('.faq-head').removeClass('active');
        if($(this).next('.faq-body').css('display') === 'none') {
            $(this).next('.faq-body').slideDown('slow');
            $(this).addClass('active');
        }else {
            $(this).next('.faq-body').slideUp('slow');
            $(this).removeClass('active');
        }
    });


    particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#eaeaea"},"shape":{"type":"edge","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#eaeaea","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


});


function windowHeight() {
    $('.win-height').css({ 'min-height': $(window).height() });
}

function animateBox() {
    let scrollVar = $(document).scrollTop();

    $('.animate-box').each(function() {
        let boxVal = $(this).offset().top - $(window).height() + 50;

        if (scrollVar > boxVal) {
            if (!$(this).hasClass('animated')) {

                if ($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                } else if ($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                } else {
                    $(this).addClass('animated fadeInUp');
                }

            }
        }
    });
}