$(document).ready(function () {

    // Main controller for CSC 497 Project
    // Kelsey Legault - Jan to April 2017

    // Get width of content for animation.
    var width = $(".ad").width();
    $(".ad").width(width);

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
});
