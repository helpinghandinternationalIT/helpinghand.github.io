$(document).ready(function(){
    $('.covid-oxygen-table').load('oxygen_table/t0.html');
});
$('.p1').click(function(){
      pageClicked('0')
    });
    $('.p2').click(function(){
      pageClicked('1')
    });
    $('.p3').click(function(){
      pageClicked('2')
    });
    $('.p4').click(function(){
      pageClicked('3')
    });
    $('.p5').click(function(){
      pageClicked('4')
    });
    $('.p6').click(function(){
      pageClicked('5')
    });
    $('.p7').click(function(){
      pageClicked('7')
    });
    $('.p8').click(function(){
      pageClicked('8')
    });
    $('.p9').click(function(){pageClicked('9')});
    function pageClicked(i){
      $('.covid-oxygen-table').load(`oxygen_table/t${i}.html`);

        if(i==0){
          $('.p1').addClass('active');
          $('.p2').removeClass('active');
          $('.p3').removeClass('active');
          $('.p4').removeClass('active');
          $('.p5').removeClass('active');
          $('.p6').removeClass('active');
        }else if(i==1){
            $('.p2').addClass('active');
            $('.p1').removeClass('active');
            $('.p3').removeClass('active');
            $('.p4').removeClass('active');
            $('.p5').removeClass('active');
            $('.p6').removeClass('active');
        }else if(i==2){
              $('.p3').addClass('active');
              $('.p1').removeClass('active');
              $('.p2').removeClass('active');
              $('.p4').removeClass('active');
              $('.p5').removeClass('active');
              $('.p6').removeClass('active');
        }else if(i==3){
              $('.p4').addClass('active');
              $('.p1').removeClass('active');
              $('.p3').removeClass('active');
              $('.p2').removeClass('active');
              $('.p5').removeClass('active');
              $('.p6').removeClass('active');
        }else if(i==4){
              $('.p5').addClass('active');
              $('.p1').removeClass('active');
              $('.p3').removeClass('active');
              $('.p2').removeClass('active');
              $('.p4').removeClass('active');
              $('.p6').removeClass('active');
          }else{
            $('.p6').addClass('active');
            $('.p2').removeClass('active');
            $('.p1').removeClass('active');
            $('.p4').removeClass('active');
            $('.p3').removeClass('active');
            $('.p5').removeClass('active');
      }
    };
$(document).ready(function(){
  $('.donate-button-section').mouseover(function(){
    $('.donate-button').addClass("donate-hover");
    $('.donate-text').text("Donate");
    $('.donate-text').fadeIn('slow');
  });
  $('.donate-button-section').mouseout(function(){
    $('.donate-button').removeClass("donate-hover");
    $('.donate-text').empty();
  });
});
$(document).ready(function(){
  $('.become-member-button-section').mouseover(function(){
    $('.become-member-button').addClass("become-member-hover");
    $('.become-member-text').text("Become Member");
    $('.become-member-text').fadeIn('slow');
  });
  $('.become-member-button-section').mouseout(function(){
    $('.become-member-button').removeClass("become-member-hover");
    $('.become-member-text').empty();
  });
});
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });
  $('.counter').addClass('animated fadeInDownBig');
});
$(function(){
    $('#nav-placeholder').load('nav.html');
});

$(function(){
    $('#footer-placeholder').load('footer.html');
});
(function($) {
  "use strict";
  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 17;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><span class="material-icons md-36">menu</span></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    function hamburgerButtonToggle(e) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle span').removeClass('md-light');
          $('.mobile-nav-toggle span').text("menu");
          $('.mobile-nav-overly').fadeOut();
        }else{
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle span').text("close");
        $('.mobile-nav-toggle span').addClass('md-light');
        $('.mobile-nav-overly').toggle();
       }
    };
$('.mobile-nav-toggle').click(hamburgerButtonToggle);
$('.id-nav').click(hamburgerButtonToggle);
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  introCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 100,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
})(jQuery);
