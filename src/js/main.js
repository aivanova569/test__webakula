$(document).ready(function() {
    $('#nav > .menu-list > .menu-list-icon').click(function() {
        $(this).find('.submenu').stop().slideToggle('slov');
    });

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $(".product__tabs .product__tabs__wrapper .tabs__title").click(function() {
		$(".product__tabs .product__tabs__wrapper .tabs__title").removeClass("active").eq($(this).index()).addClass("active");
         $(".product__tabs .tab__content__inner").hide().eq($(this).index()).fadeIn();
         $('.slick-slider').slick('setPosition');
    }).eq(0).addClass("active");
    


    $('.tab__content__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 730,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
            },
        ]
    });

    $('.btn-menu').click(function(){
		$('.menu-list').slideToggle();
	});

    // Validation form
    function valideForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 5
                },
                email: {
                   required: true,
                   email: true
                } 
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    minlength: jQuery.validator.format("Введите {0} символов!")
                  },
                email: {
                  required: "Пожалуйса, введите свой E-mail",
                  email: "Неправильно введен E-mail адресс"
                }
            }
        });
    };

    valideForms('#consultation form');
    valideForms('#form');


    // Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });
    
});




