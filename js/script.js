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
	
	$('form').submit(function(){
		var invalid = [];
		// there is a name
		if ( !$.trim( $('.rsvp-name input').val() ).length ) {
			invalid.push("You must enter a name.");
		}
		
		// there is an email & and it has an @
		if ( !$.trim( $('.rsvp-email input').val() ).length ) {
			invalid.push("You must enter an email.");
		}
		else {
			if ( !~$('.rsvp-email input').val().indexOf('@') ) {
				invalid.push("Bad Email, yo");
			}
		}
		
		// there is an attendance
		if ( !$('.rsvp-attend-yes input').is(':checked') && !$('.rsvp-attend-no input').is(':checked')  ) {
			invalid.push("Let us know frealz");
		}
		else {
			if ( ! $('.rsvp-party .ss-choices input:checked').length ) {
				invalid.push("How many?");
			}
			else {
				if ( $('.rsvp-party-other input').first().is(':checked') ) {
					if ( !$.trim($('.ss-q-other').val()).length ) {
						invalid.push("What other?");
					}
				}
			}
		}
			// if attendance - there is a number selected
	
		if ( invalid.length ) {
			$('.rsvp-block').addClass('rsvp-invalid');
			return false;
		}
		
		// if they are attending
		if ( $('.rsvp-attend-yes input').is(':checked') ) {
			alert('Thanks for coming');
		}
		else {
			alert('FUCKOFF');
		}
		
		// if they aren't
	});
	
});





















