$(document).ready(function() {

  $(function() {
      setInterval(function() {
        var color = 0;
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        var whatToPrint = hour + ":" + minute;
        $("#sec").html(whatToPrint);
      }, 1000);


var day =  {weekday: 'long'};
var wd =  new Date().toLocaleDateString('en-us', day);

var dMonth =  {day: 'numeric'};
var md=  new Date().toLocaleDateString('en-us', dMonth);

var month= { month: 'long'};
var m =  new Date().toLocaleDateString('en-us',month);

var year =  { year: 'numeric'};
var y =  new Date().toLocaleDateString('en-us', year);

document.getElementById("today").innerHTML = wd +", "+m+" "+md+", "+y;

document.getElementById("month").innerHTML =m;
    });
  });


