

//$('.box').css("background", "blue");
$('.box').click(function(){

    $('.box').css("background", "red");

})

$('.box1').click(function(){

    $('.box1').css("background", "blue");

})

$('.clicktext').click(function(){

    $('.clicktext').css("color", "red");
})

$(window).on("scrool", function(){
    $('.box').css("background", "black");
})