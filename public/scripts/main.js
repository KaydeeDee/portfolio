"use strict";

$(function () {

    setTimeout(function () {
        $(".header--typed").typed({
            strings: ["a Web Developer.", "^222 an avid reader.", "^111 a huge documentary fan.", "^111 based in Toronto.", "^111 a black coffee drinker."],
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

    // new WOW(
    //     {
    //         boxClass: 'wow',    
    //         animateClass: 'animated', 
    //         offset: 100,          
    //         mobile: false,       
    //         live: true  
    //     }
    //     ).init();

    // Smooth scroll
    $('a').smoothScroll({
        speed: 1350
    });

    $();
});