/* Author: A-Zel */

$(document).ready(function(){
	
	$('.rsvp-attend-yes input').change(function(){
		if ( $(this).is(":checked") ) {
			$('.rsvp-party').addClass('form-section-focus');
		}
	});
	$('.rsvp-attend-no input').change(function(){
		if ( $(this).is(":checked") ) {
			$('.rsvp-party').removeClass('form-section-focus');
		}
	});
	
});





















