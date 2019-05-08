$(function(){
	console.log( "hello");
	
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=d3be8895fa7bc3958d3c71c003ef8751'
	
	$.get(url, function(data) {
		// The get request fires a callback function when the API request finishes
		// 	  weatherData = data;
	  console.log(data);
		// The data object contains all the information returned in the API
	  var weather = data.weather[0];
		// In this case, the most interesting bit of data is in the weather key
		// Now do something interesting with the data!
     


      var temp = data.main.temp;
      var hotKelvin = 316;
      var rgbTemp = temp / hotKelvin
      console.log('temp', temp);
    
      var icon = data.weather[0].icon;
      var image = '<img class="icon" src="./assets/' + icon + '.png">';
      console.log(icon);
    
    
      $('.weather-image').append(image).addClass('icon-' + icon);
    });	
})
