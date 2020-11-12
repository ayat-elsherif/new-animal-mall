(function($){
    "use strict";

    $(window).on('load', function() {
        $(".loade").delay(2000).fadeOut("slow");
        $(".preloader").delay(2000).fadeOut("slow");
    })
    

    // lightcase 
    $('a[data-rel^=lightcase]').lightcase();

    // menu icon releted
    $(".menu li ul").parent("li").children("a").addClass("dd-icon-down");
    $(".main-menu li ul").parent("li").children("a").addClass("dd-icon-right");

    // mobile menu responsive
    $(document).on('click','.header-bar',function(){
        $(".header-bar").toggleClass("close");
        $(".menu").toggleClass("open");
    });

    //mobile drodown menu display
    $('.mobile-menu-area ul li a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(1000,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(1000,"swing");
            element.siblings('li').children('ul').slideUp(1000,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(1000,"swing");
        }
    }); 

    // drop down menu width overflow problem fix
    $('ul').parent().on("hover", function() {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        }
    });


    // scroll up start here
    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
            } else {
                $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'})
            }
        });
        //Click event to scroll to top
        $('.scrollToTop').on('click', function(){
            $('html, body').animate({scrollTop : 0},500);
            return false;
        });
    });

    
    // product view mode change js
    $(function() {
        $('.product-view-mode').on('click', 'a', function (e) {
            e.preventDefault();
            var shopProductWrap = $('.shop-product-wrap');
            var viewMode = $(this).data('target');
            $('.product-view-mode a').removeClass('active');
            $(this).addClass('active');
            shopProductWrap.removeClass('grid list').addClass(viewMode);
        });
    });

    // search & cart option
    $(document).on('click','.search-start, .search-close',function(){
        $(".search-area").toggleClass("open");
    });

    // banner slider section
    var swiper = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.banner-pagination',
            clickable: true,
        },
        loop: true,
    });
    
    // home page 4 banner
    var swiper = new Swiper('.banner-slider-2', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.banner-pagination-2',
            clickable: true,
        },
        loop: true,
    });
    

    // animal slider section
    var swiper = new Swiper('.animal-slider', {
        slidesPerView: 7,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.animal-slider-next',
            prevEl: '.animal-slider-prev',
        },
        loop: true,
        breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 4,
            },
            576: {
				slidesPerView: 2,
            },
            340: {
				slidesPerView: 1,
            }
		}
    });

    var swiper = new Swiper('.pet-slider', {
        slidesPerView: 7,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.pet-slider-next',
            prevEl: '.pet-slider-prev',
        },
        loop: true,
        breakpoints: {
            1350: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 5,
            },
            1100: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
            },
            768: {
				slidesPerView: 2,
            },
            575: {
				slidesPerView: 1,
            }
		}
    });

    var swiper = new Swiper('.birds-slider', {
        slidesPerView: 7,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.birds-slider-next',
            prevEl: '.birds-slider-prev',
        },
        loop: true,
        breakpoints: {
            1350: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 5,
            },
            1100: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
            },
            768: {
				slidesPerView: 2,
            },
            575: {
				slidesPerView: 1,
            }
		}
    });

    var swiper = new Swiper('.other-slider', {
        slidesPerView: 7,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.other-slider-next',
            prevEl: '.other-slider-prev',
        },
        loop: true,
        breakpoints: {
            1350: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 5,
            },
            1100: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
            },
            768: {
				slidesPerView: 2,
            },
            575: {
				slidesPerView: 1,
            }
		}
    });

    var swiper = new Swiper('.lastOrder-slider', {
        slidesPerView: 3,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.lastOrder-slider-next',
            prevEl: '.lastOrder-slider-prev',
        },
        loop: true,
        breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
            },
            768: {
				slidesPerView: 2,
            },
            575: {
				slidesPerView: 1,
            }
		}
    });


    var swiper = new Swiper('.supplies-slider', {
        slidesPerView: 3,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.supplies-slider-next',
            prevEl: '.supplies-slider-prev',
        },
        loop: true,
        breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
            },
            768: {
				slidesPerView: 2,
            },
            575: {
				slidesPerView: 1,
            }
		}
    });




    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // sponsor slider section
    var swiper = new Swiper('.sponsor-slider', {
        slidesPerView: 6,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            420: {
                slidesPerView: 1,
            },
        },
        loop: true,
    });


    // animal slider section
    var swiper = new Swiper('.post-thumb-slider', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.post-thumb-slider-next',
            prevEl: '.post-thumb-slider-prev',
        },
        loop: true,
    });


    // shop cart + - start here
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // banner slider
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
			768: {
				slidesPerView: 3,
            },
            576: {
				slidesPerView: 2,
            },
            450: {
				slidesPerView: 1,
            }
		}
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: galleryThumbs
        },
        loop: true,
    });

    // testimonoial
    var galleryThumbs = new Swiper('.testi-thumbs', {
        spaceBetween: 20,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true
    });
    var galleryTop = new Swiper('.testi-top', {
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: galleryThumbs
        },
        loop: true
    });



     /*******************************Delivery Options***************************** */
 $(".form-check").on('click', function(){
    $('.payMethod').css('display','none');
    $(this).find('.howToPay').prop('checked',true);
        let switchClass= $(this).find('.howToPay').val();
       $('#'+switchClass).css('display','block');
     
 });

 
 $('.chooseBank').on('change',function(){
    $('.bankAccount').css('display','none');
     let bankName=$(this).val();
     $('#'+bankName).css('display','block');

 });

 $('.photo-icon').on('click',function(){
    $(this).next('.photo-file').click();
});



    /**********************Start open photos in chef profile********************** */
    $('.photo-icon').on('click',function(){
        $(this).next('.photo-file').click();
    });

    $('.photo-mat-icon').on('click',function(){
        $(this).next('.photo-mat-file').click();
    });

    $('.photo-mat-file').on('change',function(){
        let fileVal=$(this).val();
        fileVal = fileVal.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        $(this).next('.photo-mat-src').text(fileVal).next('i').removeClass('d-none');
    });

    /**********************End open photos in chef profile********************** */



}(jQuery));