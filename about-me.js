// when the user clicks submit leave a message
function message() {
	// when user clicks submit leave a message
	$('#submit').click(function(evt) {
		evt.preventDefault();
		$('#contact-me').hide();
		$('#form').text("I will reach back as soon as possible. Thank you.");

	});

}

$( document ).ready(function() {
	//when page loads fade img in slowly
	$('#img1').fadeIn('slow', 'swing');
	
	//when user hovers over nav change background color
	$("#nav a").hover(function(){
	  $(this).css("background-color", "#FCEBF6");
	  }, function(){
	  $(this).css("background-color", "#e1ecf5");
	});


    console.log( "ready!" );
});