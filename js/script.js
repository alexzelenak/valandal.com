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
	
	$('form input').bind("focus change", function(){
		$(this).closest('.rsvp-block').removeClass('rsvp-invalid');
	});
	
	$('form').submit(function(){
		var invalid = [];
		// there is a name
		if ( !$.trim( $('.rsvp-name input').val() ).length ) {
			invalid.push("You must enter a name.");
			$('.rsvp-name input').closest('.rsvp-block').addClass('rsvp-invalid');
		}
		
		// there is an email & and it has an @
		if ( !$.trim( $('.rsvp-email input').val() ).length ) {
			invalid.push("You must enter an email.");
			$('.rsvp-email input').closest('.rsvp-block').addClass('rsvp-invalid');
		}
		else {
			if ( !~$('.rsvp-email input').val().indexOf('@') ) {
				invalid.push("Bad Email, yo");
				$('.rsvp-email input').closest('.rsvp-block').addClass('rsvp-invalid');
			}
		}
		
		// there is an attendance
		if ( !$('.rsvp-attend-yes input').is(':checked') && !$('.rsvp-attend-no input').is(':checked')  ) {
			invalid.push("Let us know frealz");
			$('.rsvp-attend-yes input').closest('.rsvp-block').addClass('rsvp-invalid');
		}
		else {
			if ($('.rsvp-attend-yes input').is(':checked') && ! $('.rsvp-party .ss-choices input:checked').length ) {
				invalid.push("How many?");
				$('.rsvp-party input').closest('.rsvp-block').addClass('rsvp-invalid');
			}
			else {
				if ( $('.rsvp-party-other input').first().is(':checked') ) {
					if ($('.rsvp-attend-yes input').is(':checked') && !$.trim($('.ss-q-other').val()).length ) {
						invalid.push("What other?");
						$('.rsvp-party-other input').closest('.rsvp-block').addClass('rsvp-invalid');
					}
				}
			}
		}
			// if attendance - there is a number selected
	
		if ( invalid.length ) {
			return false;
		}
		
		// if they are attending
		if ( $('.rsvp-attend-yes input').is(':checked') ) {
			$('.rsvp-form').fadeOut(function () {
				$('.rsvp-form-submit-attending').fadeIn();
			});
		}
		// if they aren't
		else {
			$('.rsvp-form').fadeOut(function () {
				$('.rsvp-form-submit-not-attending').fadeIn();
			});
		}
		
	});

	$(function() {
		//this code will run when the page is done loading
		var seconds = 0; //this is how long the page will wait
			window.setTimeout(function() {
			//this code will run after a timeout
			$("#muah img").addClass("tween");
		}, seconds * 1000);
	});

});





















