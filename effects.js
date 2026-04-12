$(document).ready(function() {
	console.log('Ready!'); 
	
	// add animation to the rose img
	$('#rose').animate(
		{
			right: '100px',
			opacity: '1'	
		},
		// duration and ease
		'slow',
		'swing'
	);
	
	// add submit event to the form
	$('form').submit(function(evt) {
		evt.preventDefault();
		alert("Thank you for registering!")
		$('#newsSignup').hide();
		$('#signuplink').fadeTo('slow', 0.3)
		
		
		
	});
	

	// hide form
	$('#newsSignup').hide();
	
	// when user clicks '+' the form will pop up, when the user clicks '-' the form will disappear
	$('#signuplink').click(function(evt) {
		
		//
		evt.preventDefault();
		$('#newsSignup').slideToggle();
		
		if ($('#openclose').text() == "+" ) {
			$('#openclose').text("-")
		} 
		else {
			$('#openclose').text("+")
			
		}
	});
	
	
	
	// add a hover action to the slogan element
	// use the callback function to change text and fading
	$('#slogan').hover(
		function() {
			$(this).fadeOut('normal', 'linear', function() {
			$(this).text("Hand Picked Just for You").fadeIn('slow', 'swing')
		})	
		},

		
		function() {
			$(this).fadeOut('fast','swing', function() {
			$(this).text("The Power of Flowers").fadeIn('slow', 'linear')
				
				
			})
		});
		
		
		
	
	
	
});
