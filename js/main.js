// Main controller for CSC 497 Project
// Kelsey Legault - Jan to April 2017

// Get width of content for animation.
var width = $(".ad").width();
$(".ad").width(width);

// Add animation on click.
$('.frame-item').click(function(){
    $(this).addClass("frame-item__hide");
    console.log("click");
});
