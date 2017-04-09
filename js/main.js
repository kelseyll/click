// Main controller for CSC 497 Project
// Kelsey Legault - Jan to April 2017
$(document).ready(function () {

    $( ".frame-item" ).each(function( index ) {
        var height = $(this).height();
        $(this).height(height);
    });
    // Add animation on click.
    $('.closeparent').click(function(){
        $(this).parent().parent().parent().addClass("frame-item__hide");
    });

    // Timer
    var sec = 59;
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
        }
    }, 1000);

    // Score
    var score = 0;
    $(".like").click(function(){
        score = score + 1;
        $('.score').text(score);
    });
    $(".heart").click(function(){
        score = score + 2;
        console.log("click");
        $('.score').text(score);
    });

    // Modals
    $(".description-button, .close-description").click(function(){
        $(".description").toggleClass("sup");
        if ( $(".share").hasClass( "sup" ) ) {
            $(".share").toggleClass("sup");
        }
        // Remove scroll
        if ( $("html, body").hasClass( "overflow" ) ) {
            $("html, body").toggleClass("overflow");
        }
    });

    $(".share-button, .close-share").click(function(){
        $(".share").toggleClass("sup");
         if ( $(".description").hasClass( "sup" ) ) {
             $(".description").toggleClass("sup");
         }
        // Remove scroll
        if ( $("html, body").hasClass( "overflow" ) ) {
            $("html, body").toggleClass("overflow");
        }
    });
});
