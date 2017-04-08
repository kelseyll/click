// Main controller for CSC 497 Project
// Kelsey Legault - Jan to April 2017
$(document).ready(function () {

    $( ".frame-item" ).each(function( index ) {
        var height = $(this).height();
        $(this).height(height);
    });
    // Add animation on click.
    $('.frame-item').click(function(){
        $(this).addClass("frame-item__hide");
        var nextitem = $(this).next();
        nextitem.addClass("frame-item__dunclick");
        setTimeout(function(){
          nextitem.removeClass("frame-item__dunclick")
        }, 500);
        console.log("click");
    });

    // Timer
    var sec = 60
    var timer = setInterval(function() {
        $('.timer').text(sec--);
        // When timer runs out
        if (sec == -1) {
            // Stop timer
            clearInterval(timer);
        }
    }, 1000);
});
