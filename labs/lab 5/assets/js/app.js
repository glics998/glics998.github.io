$('.nav-item').click(function() {
var button = $(this).data('button');

if (button_name == 'beyonce') {
   $('.slay').removeClass('hide');
   $('audio')[0].play();
} else if (button_name== ('about') {
} else {
 $('.cotent').attr('class','column','content');
 $('.contet').addClass(button_name);
 $('.nav-item').removeClass('active');
 $(this).addClass('active');

}

});

$('.close').click(function () {
    $('.slay').addClass('hide')
    $('audio')[0].pause();
}

});