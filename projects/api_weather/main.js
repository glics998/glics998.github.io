$.get('http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=d3be8895fa7bc3958d3c71c003ef8751', function(data) {
    // The get request fires a callback function when the API request finishes
    console.log(data);
    // The data object contains all the information returned in the API
    var weather = data.weather[0];
  
    // In this case, the most interesting bit of data is in the weather key
    // Now do something interesting with the data!
    $('body').html('The weather is ' + weather.description);

    $('body').html( 'The Temperature in K is ' + data.main.temp);
   


    var colorOutput = 'body';
    if(data.main.temp < 277.594){
        colorOutput = 'blue'; 
    }else if(data.main.temp < 288.706){
        colorOutput = 'red'; 
    }
    
   
    $('body').css('background',colorOutput);
   
   




});