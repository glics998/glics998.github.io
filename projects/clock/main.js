$(document).ready(function() {

  $(function() {
      setInterval(function() {
        var color = 0;
     
        var minute = new Date().getMinutes();
        var hours = new Date().getHours();

        var whatToPrint = hours + ":" + minute + ":";
        $("#t1").html(whatToPrint);
      }, 1000);
    });
  });

