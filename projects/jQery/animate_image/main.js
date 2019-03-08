$(document).ready(function(){

  var left = 0;

$(".seagull").each(function(i,val){

          $(this).animate({

              left: left,

              opacity: 1

          }, 1500 );

          left += 150;

  });
});





