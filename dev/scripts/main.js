// const appTotal = {};


$(function () {

    // $(".typed").hide 
    
    // typed({
    //     strings: ["First sentence.", " Second sentence."],
    //     typeSpeed: 40,
    //     loop: true
    // })


    setTimeout(function () {
        $(".header--typed").typed({
            strings: ["a Web Developer.", "^222 an Avid Reader.", "^111 A Documentary Lover", "^111 Blah Blah", "^111 More Blah Blah"], // ^{number} denotes time in ms to wait

            // typing speed
            typeSpeed: 120,

            // time before typing starts
            startDelay: 0,

            // backspacing speed
            backSpeed: 60,

            // time before backspacing
            backDelay: 800,

            // loop
            loop: true,

            // false = infinite
            loopCount: false,

            // show cursor
            showCursor: true,

            // character for cursor
            cursorChar: "",

            // attribute to type (null == text)
            attr: null,

            // either html or text
            contentType: 'html',

            // call when done callback function
            callback: function () { }
        })
    })

});




// appTotal.events = function () {}

