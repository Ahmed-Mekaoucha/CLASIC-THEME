/*global $, document, window*/
$(document).ready(function () {
    'use strict';
    // Set Up The Time Of The Suscribe Popup
    $('.subscribe').delay(2000).fadeIn(1000);
    // Set Up The Height Of The Header & Section & The psitions Of The Header children On Resize
    $(window).resize(function () {
        $('.slider').css({
            marginTop: ($(window).height() - $('.slider').height()) / 2
        });
    });
    // Scrollig to The Areas Of The Menu List
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
    // Bx Slider Bluguin SetUp
    $('.bxslider').bxSlider({
        auto: true,
        speed: 700,
        infiniteLoop: true,
        randomStart: true,
        pager: true
    });
    // Set Up The Position Of The Slider In The Header
    $('.slider').css({
        marginTop: ($(window).height() - $('.slider').height()) / 2
    });
    // Set Up & Fire The Nice scroll Bluguin
    $("body").niceScroll({
        cursorcolor: "#3CBC99",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorborderradius: 0,
        zindex: 999,
        scrollspeed: 100,
        mousescrollstep: 10
    });
    // Ad Class Active To The Clicked Li In The Projects Section
    // Change The Pictures depend on Category
    $('.projects .container ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.All').attr('class', 'All ' + $(this).text().toLowerCase());
    });
    // Add Clas To The Navigation Elements After Scrolling To Their Sections
    $(window).on('scroll', function () {
        var fixheadheight = $('.fixed-header').innerHeight();
        $('.area').each(function () {
            if (($(document).scrollTop() + fixheadheight) > $(this).offset().top) {
                $('a[data-content=' + $(this).attr('id') + ']').addClass('active').parent().siblings().find('a').removeClass('active');
            }
        });
    });
    // Show & Hide Go To Top Button Depend On Scrolling
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1000) {
            $('.top').fadeIn(500);
        } else {
            $('.top').fadeOut(500);
        }
    });
    // Set Up Go to top Button
    $('.top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    // Make Th Label Of The Input Look From Place Holder To Label On Focus
    $('.subscribe section form div input').on('focus', function () {
        $(this).next('label').animate({
            top: '-25px',
            fontSize: '17px',
            color: '#FFF'
        }, 300);
    });
    // Make The Label Of The Input Look Like Place Holder On Blur If The Input Is Empty
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
    // Hide The Subscribe Popup Hide After Click On It Or The X Icon
    $('.subscribe, .subscribe section i').on('click', function () {
        $('.subscribe').fadeOut(500);
    });
    // Stop Propagation In The Div In The Popup
    $('.subscribe section').on('click', function (e) {
        e.stopPropagation();
    });
    // Hide The Subscribe Popup After Clicking On <<Esc>> Key
    $(document).on('keydown', function (event) {
        var keycode = event.keycode || event.which;
        if (keycode === 27) {
            $('.subscribe').fadeOut(500);
        }
    });
    // Change The Backgroun & add Bottom Border To The Header & Make It Fixed After Scrollin
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
