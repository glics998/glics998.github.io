$(function() {
	$('.button').click(function() {
	console.log('i clicked it');
	var number = (Math.floor(Math.random() * 5) + 1);
	
	$('.box').removeClass('.color');
	$('.box').eq(number).addClass('.color');
	console.log("number");

	  });
	});
