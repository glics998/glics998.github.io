$(function() {

    $('.adults .item').each(function() {
        var item = $(this);
        var i = 0;
        var txt = item.text();
        var speed = 50;

        console.log( adults,item );

        if (i < txt.length) {
            item.append( txt.charAt(i) );
            i++;
            setTimeout(typeWriter, speed);
        }
    });

     $('.children .item').each(function() {
      var item = $(this);
      var i = 0;
    var txt = item.text();
        var speed = 50;

        if (i < txt.length) {
             document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
     });
    

});





  