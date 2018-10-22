$(document).ready(function(){
    $("#toggle_button").click(function(){
    	$(this).toggleClass('toggle_active');
    });

    $('.navbar_mobile').find('p').click(function() {
        $('#toggle_button').trigger('click');
    });

    var slidesToShowVar = 1;

    if ($(window).width() > 1199) {
        slidesToShowVar = 5;
    } else if ($(window).width() > 991){
        slidesToShowVar = 4;
    } else if ($(window).width() > 767) {
        slidesToShowVar = 3;
    } else if ($(window).width() > 575) {
        slidesToShowVar = 2;
    } else {
        slidesToShowVar = 1;    
    }

    $('.slider-ebec').slick({
    	autoplaySpeed: 6000,
    	autoplay: true,
    	infinite: true,
    	speed: 2000,
    	arrows: false,
        dots: true,
        appendDots: $('.ebec-dots'),
        dotsClass: 'custom-dots',
        customPaging: function (slider, i) {
            return '<a class="dot" role="button"></a>';
        }
    });

    $('.slider-best').slick({
    	autoplaySpeed: 6000,
    	autoplay: true,
    	infinite: true,
    	speed: 2000,
    	arrows: false,
        dots: true,
        appendDots: $('.best-dots'),
        dotsClass: 'custom-dots',
        customPaging: function (slider, i) {
            return '<a class="dot" role="button"></a>';
        }
    });

    $('#sliderPartners').slick({
    	autoplaySpeed: 6000,
    	autoplay: true,
    	infinite: true,
    	speed: 2000,
    	asNavFor: '#sliderPartnersText',
    	arrows: false
    });

    $('#sliderPartnersText').slick({
    	autoplaySpeed: 6000,
    	autoplay: false,
    	infinite: true,
    	speed: 2000,
    	fade: true,
    	asNavFor: '#sliderPartners',
    	arrows: false
    });


    $('.additional-partners').slick({
    	autoplaySpeed: 2000,
    	autoplay: true,
    	infinite: true,
    	speed: 2000,
    	slidesToShow: slidesToShowVar,
    	slidesToScroll: 1,
    	arrows: false
    });

    $(".to_main").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#main_section").offset().top
	    }, 2000);
	});

    $(".to_ebec").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#ebec_section").offset().top
	    }, 2000);
	});

	$(".to_category").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#category_section").offset().top
	    }, 2000);
	});

	$(".to_best").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#best_section").offset().top
	    }, 2000);
	});

	$(".to_contacts").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contacts_section").offset().top
	    }, 2000);
	});

	$(".to_partners").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#partners_section").offset().top
	    }, 2000);
	});
});

$(window).resize(function() {
    var slidesToShowVar = 1;

    if ($(window).width() > 1199) {
        slidesToShowVar = 5;
    } else if ($(window).width() > 991){
        slidesToShowVar = 4;
    } else if ($(window).width() > 767) {
        slidesToShowVar = 3;
    } else if ($(window).width() > 575) {
        slidesToShowVar = 2;
    } else {
        slidesToShowVar = 1;    
    }

    $('.additional-partners').slick('unslick');

    $('.additional-partners').slick({
        autoplaySpeed: 2000,
        autoplay: true,
        infinite: true,
        speed: 2000,
        slidesToShow: slidesToShowVar,
        slidesToScroll: 1,
        arrows: false
    });
});
