$(document).ready(function(){

 
  $(".modal").toggle().css("opacity", "0");
    
     })

     $(".button").click(function(){
      $(".modal").toggle().animate({
        opacity: "1",
      }, 1000)
    });
    $(".modal-background").click(function(){
      $(".modal").toggle().css("opacity", "0");
    })
    