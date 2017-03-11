console.log("meossw");
var width = $(".ad").width();
$(".ad__popover").width(width);
$('.frame-item').click(function(){
    $(this).addClass("frame-item__hide");
    console.log("click");
});

$('.ad').hover(function(){
    console.log("hover");
});
