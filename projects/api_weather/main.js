$.get(' https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=d3be8895fa7bc3958d3c71c003ef8751', function(data) {
$.get(url, function(results) {
    // The get request fires a callback function when the API request finishes
    console.log(results);
    // The data object contains all the information returned in the API
    var weather = results.weather[0];
    var weathertext = results.weather[0].main;
    var humidity = results.main.humidity;
    var temp = results.main.temp;
  
  
    // In this case, the most interesting bit of data is in the weather key
    // Now do something interesting with the data!
   
    $('body').append(temp + 'F');
    $('body').append('<img src="weather.png" width= "500" height="500" align=left>');
 
  
      
  
  for(var counter=0; counter< 1; counter++){
      console.log('counter', counter);
      console.log('weathertext', weathertext);
  
          if(weathertext == 'Rain'){
  
            $('body').append('<img src="rain.png" width= "500" height="500">');
                      
          } else if(weathertext == 'Clear'){
  
            $('body').append('<img src="clear.png" width= "500" height="500">');  
          
          } else if(weathertext == 'Thunderstorm'){
           
            $('body').append('<img src="thunderstorm.png" width= "500" height="500">');

        } else if(weathertext == 'Snow'){
           
            $('body').append('<img src="snow.png" width= "500" height="500">');

        } else if(weathertext == 'Shower Rain'){
           
            $('body').append('<img src="showerrain.png" width= "500" height="500">');
            
            
        }
    


        
});