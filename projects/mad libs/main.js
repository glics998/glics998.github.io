$(function() {
	$.get('https://glics998.github.io/api.json', function(data) {
		console.log(data);
		var adjective1 = data.adjective1;
		var adjective2 = data.adjective2;
		var artSupply = data.artSupply;
		var computerSoftware = data.computerSoftware;
		var websiteName= data.websiteName;
		var artistName = data.artistName;
		var celebrityName= data.celebrityName;
		var noun1 = data.noun1;
		var noun2= data.noun2;
		var pluralNoun1= data.pluralNoun1;
		var pluralNoun2= data.pluralNoun2;
		var pluralNoun3= data.pluralNoun3;
		var verbEndingInIng= data.verbEndingInIng;
		var placeInNewYork= data.placeInNewYork;
		var bodyPart= data.bodyPart;
		var numbers= data.numbers;
		var foods= data.foods;


		
		$('.word-adjective-1').html(adjective1)
		$('.word-adjective-2').html(adjective2)
		$('.art-supply').html(artSupply)
		$('.computer-software').html(data.computerSoftware)
		$('.website-name').html(data.websiteName)
		$('.artist-name').html(data.artistName)
		$('.celebrity-name').html(data.celebrityName)
		$('.noun-1').html(data.noun1)
		$('.noun-2').html(data.noun2)
		$('.plural-noun-1').html(data.pluralNoun1)
		$('.plural-noun-2').html(data.pluralNoun2)
		$('.plural-noun-3').html(data.pluralNoun3)
		$('.verb-ending-in-ing').html(data.verbEndingInIng)
		$('.place-in-new-york').html(data.placeInNewYork)
		$('.body-part').html(data.bodyPart)
		$('.numbers').html(data.numbers)
		$('.foods').html(data.foods)




	}).fail(function() {
		console.log('Error in GET request. Handle the error gracefully.');
	});	
});


var urls=
[
	"https://kquea402.github.io/api.json",
	"https://glics998.github.io/api.json",
	"https://colindharrington.github.io/api.json",
	"https://hoant626.github.io/api.json",
	"https://karla772.github.io/api.json",
	"https://leeh779.github.io/api.json",
	"https://lis874.github.io/api.json",
	"https://phoebechloee.github.io/api.json",
	"https://luw779.github.io/api.json",
	"https://mullg389.github.io/api.json",
	"https://pana005.github.io/api.json",
	"https://raos130.github.io/api.json",
	"https://samsj948.github.io/api.json",
	"https://shaha129.github.io/api.json",
	"https://Mwedd9.github.io/api.json",
	"https://zhenx804.github.io/api.json"
  ];
  var randomUrl = urls[ Math.floor(Math.random()*urls.length) ];



	$('.button').click(function() { 
		console.log( $(this) );
		var url= $(this).data('url');
		console.log(url);

		$.get(url,function(data) {
			console.log(data);
		});
	});

$('.random-button').click(function() {
	var randomUrl = urls[ Math.floor(Math.random()*urls.length) ];
	// $.get(randomUrl, function() { ... });
  });


		
		
		
