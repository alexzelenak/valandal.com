/* Author: A-Zel */

$(document).ready(function(){
	
	$('.rsvp-attend-yes input').focus(function(){
		$('.rsvp-party').addClass('form-section-focus');
	});
	$('.rsvp-attend-no input').focus(function(){
		$('.rsvp-party').removeClass('form-section-focus');
	});
	
});





















