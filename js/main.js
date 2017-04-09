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

    // Modal
    $(".description").click(function(){
        $(".modal-container").toggle();
        $(".modal.description").toggle();

        // $(this).find("span").text(XX);
    });
});
