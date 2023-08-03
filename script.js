$('button').on('click', () => {
        alert('Быстрое модальное окно')
});


$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		});		
});