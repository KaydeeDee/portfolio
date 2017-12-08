"use strict";

// const appTotal = {};


$(function () {

    setTimeout(function () {
        $(".header--typed").typed({
            strings: ["a Web Developer.", "^222 an Avid Reader.", "^111 A Documentary Lover", "^111 Blah Blah", "^111 More Blah Blah"],
            typeSpeed: 90,
            startDelay: 0,
            backSpeed: 65,
            backDelay: 900,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: "",
            attr: null,
            contentType: 'html',
            callback: function callback() {}
        });
    });

    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        live: true // default
    }).init();

    // Smooth scroll
    $('a').smoothScroll({
        speed: 1200
    });
});

// appTotal.events = function () {}