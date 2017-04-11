// Main controller for CSC 497 Project
// Kelsey Legault - Jan to April 2017

// Load page
$(document).ready(function () {
    // Disable scroll for instructions and loading-splash
    $("html, body").toggleClass("overflow");

    // Media Array
    var content_list =
        [
        "https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif",
        "https://media.giphy.com/media/l2JJrEx9aRsjNruhi/giphy.gif",
        "https://media.giphy.com/media/l0HlRyxGrLxUXq5KE/giphy.gif"
        ];

    // Generate array full of random numbers
    Array.from({length: 20}, () => Math.floor(Math.random() * 1000));

    var arr = []
    while(arr.length < 20){
        var randomnumber = Math.ceil(Math.random()*1000)
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    console.log(arr);

    // Retrieve content_list is retreived
    // $.getScript('js/content.js', function() {

    // Add closing animation
    $('.closeparent').click(function(){
        $(this).parent().parent().parent().addClass("frame-item__hide");
    });

    // Instructions modal, start game
    $(".start").click(function(){

        $("html, body").toggleClass("overflow");
        $(".modal-container__instructions").remove();

        // Timer
        var sec = 30;
        var timer = setInterval(function() {
            if (sec > 9) {
            $('.timer').text("0:" + sec--);
            // When timer runs out
        }
            if (sec <= 9) {
                $('.timer').text("0:0" + sec--);
            }
            if (sec == -1) {
                // Stop timer
                clearInterval(timer);
                $('.timer').text("0:00");
                $('.end-score').text(icu);

                // Show share modal
                $("html, body").toggleClass("overflow");
                $(".modal-container__playagain").fadeIn();
            }
        }, 1000);

        // Score
        var icu = 0;
        $(".like").click(function(){
            icu = icu + 1;
            $('.score').text(icu);
        });
        $(".heart").click(function(){
            icu = icu + 2;
            console.log("click");
            $('.score').text(icu);
        });
    });

    // Play Again
    $(".play-again span").click(function(){
        location.reload();
    });

    // Description modal
    $(".description-button, .close-description").click(function(){
        $("html, body").toggleClass("overflow");
        $(".description").toggleClass("sup");
        if ( $(".share").hasClass( "sup" ) ) {
            $(".share").toggleClass("sup");
            // Handle scroll
            $("html, body").toggleClass("overflow");
        }
    });

    // Share modal
    $(".share-button, .close-share, .share-score").click(function(){
        $("html, body").toggleClass("overflow");
        $(".share").toggleClass("sup");
        if ( $(".description").hasClass( "sup" ) ) {
            $(".description").toggleClass("sup");
            // Handle scroll
            $("html, body").toggleClass("overflow");
        }
    });

    // Wait for images to load
    $(window).on("load", function() {
        // Calculate height of each window for animation
        $( ".frame-item" ).each(function( index ) {
            var height = $(this).height();
            $(this).height(height);
        });

        // Fade out animations
        $(".loading-splash p").delay(1000).fadeOut(2000);
        $(".loading-splash").delay(3000).fadeOut(3000);
    });
});
