$(document).ready(function() {
	console.log("Ready!");
	
	/* Using hover() function to add border and box-shadow when user hovers over imgs and remove when the mouse is out of the img*/
	$('#thumbs img').hover(
	function() {
		$(this).css(
			{
				border: '1px solid #023020',
				boxShadow: '6px 4px #023020'
			}
		);
	},
	function() {
		$(this).css(
			{
				border: '',
				boxShadow: ''
			}
		);
	});
	
// loop through all img tags in the #gallery div 
	$('#thumbs img').each(function() {
		var imgFile = $(this).attr('src');
		var imgTxt = $(this).attr('alt');
		// when the image is clicked, assign the src attribute to the lgPic & get the correct txt for each img
		$(this).click(function() {
			$('#lgPic').attr('src', imgFile);
			$('#lgTitle').text(imgTxt)		
		});
	}); 
	
	
	// add click evt to large img to open it in a new window using src attr as the url
	$('#lgPic').click(function(evt) {
		evt.preventDefault();
		var imgFile = $(this).attr('src');
		var imgTxt = $(this).attr('alt');
		
		window.open(imgFile, imgTxt, 'height=330, width=340');
	// close window
		// window.close()
		
	});
	
	
});