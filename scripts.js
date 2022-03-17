$(document).ready(scripts);

var contador = 0;

function scripts(){
	$('.menu').click(function(){
		contador = (contador + 1)%2
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			
		} else {
			
			$('nav').animate({
				left: '-100%'
			});
		}
	});
};