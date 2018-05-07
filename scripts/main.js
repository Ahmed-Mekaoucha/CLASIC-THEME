/*global $, document, window*/
$(document).ready(function () {
    'use strict';
    $('header').height($(window).height());
    $('.subscribe').delay(2000).fadeIn(1000);
    $('nav ul li a').each(function () {
      $('#' + $(this).data('content')).not('#testimonials').height($(window).height());
    });
    $(window).resize(function () {
        $('.slider').css({
            marginTop: ($(window).height() - $('.slider').height()) / 2
        });
        $('header').height($(window).height());
        $('nav ul li a').each(function () {
          $('#' + $(this).data('content')).not('#testimonials').height($(window).height());
        });
    });

    $('header nav ul li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.' + $(this).data('content')).offset().top - $('.fixed-header').height() + 5
        }, 1000);
        if ($(this).data('content') === 'home') {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        }
    });

    $('.bxslider').bxSlider({
        auto: true,
        speed: 700,
        infiniteLoop: true,
        randomStart: true,
        pager: true
    });

    $('.slider').css({
        marginTop: ($(window).height() - $('.slider').height()) / 2
    });

    $("body").niceScroll({
        cursorcolor: "#3CBC99",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorborderradius: 0,
        zindex: 999,
        scrollspeed: 100,
        mousescrollstep: 10
    });

    $('.projects .container ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.All').attr('class', 'All ' + $(this).text().toLowerCase());
    });

    $(window).on('scroll', function () {
        var fixheadheight = $('.fixed-header').innerHeight();
        $('.area').each(function () {
            if (($(document).scrollTop() + fixheadheight) > $(this).offset().top) {
                $('a[data-content=' + $(this).attr('id') + ']').addClass('active').parent().siblings().find('a').removeClass('active');
            }
        });
    });

    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 1000) {
        $('.top').fadeIn(500);
      } else {
        $('.top').fadeOut(500);
      }
    });
    $('.top').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });


    $('.subscribe section form div input').on('focus', function () {
        $(this).next('label').animate({
          top: '-25px',
          fontSize: '17px',
          color: '#FFF'
        }, 300);
    });

    $('.subscribe section form div input').on('blur', function () {
      if ($(this).val() === '') {
        $(this).next('label').animate({
          top: '10px',
          fontSize: '21px',
          color: 'rgba(99, 110, 114,1.0)'
        });
      } else {
        $(this).next('label').animate({
          top: '-25px',
          fontSize: '17px',
          color: '#FFF'
        });
      }
    });
    $('.subscribe').on('click', function (e) {
      $(this).fadeOut(500);
    });
    $('.subscribe section').on('click', function (e) {
      e.stopPropagation();
    });
    $('.subscribe section i').on('click', function () {
      $(this).parentsUntil('body').fadeOut(500);
    });

    $(document).on('keydown', function (event) {
      var keycode = event.keycode || event.which;
      if (keycode === 27) {
        $('.subscribe').fadeOut(500);
      }
    });

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 700) {
        $('.fixed-header').css({
          backgroundColor: 'rgba(54, 54, 54, .7)',
          borderBottom: '3px solid #3DBC99'
        });
      } else {
        $('.fixed-header').css({
          backgroundColor: 'transparent',
          borderBottom: 'none'
        });
      }
    });
});
