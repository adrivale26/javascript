



$(document).ready(function() {
  console.log('Ready!');
  
  //hide all botanic names
  $('.botanic').hide();
  
  //hide imgs
  $('.imgdiv').hide();
    
  // show botanic name for flower name that was clicked on
  $('.flower').click(function() {
	  $('.botanic').hide();
	  $(this).children('.botanic').show();
  });
  
  
  // show img when cursor is hovering over flower name 
  $('.pic').hover(function(evt) {
	  
	// get position of cursor and add 150px to the left
	var xPos = evt.pageX + 150;
	var yPos = evt.pageY;
	
	// title attr concat with "#"
	var flowerName = '#' + $(this).attr('title');
	
	
	// add img according to the cursor position
	$(flowerName).css('left', xPos + 'px')
	.css('top', yPos + 'px');
	$(flowerName).show();
    },
    function() {
	//hide img 
	var flowerName2 = '#' + $(this).attr('title');
	$(flowerName2).hide();
	
	evt.preventDefault();
	return false;
    });
	
	$(document).keypress(function(evt) {
	  var keyPressed = String.fromCharCode(evt.which);
  	  if (keyPressed == keyPressed.toUpperCase()) {
  	  	keyPressed == keyPressed.toLowerCase()
  	  }
	  window.location="#"+keyPressed;
	  
	});
	
 
  
  
  // when mouse hovers over the heading, the heading changes to pink
  $('h1, h2').mouseover(function() {
	  $(this).css('color', 'lightpink');
  });
  
  // when the mouse is not over the heading, the heading changes to its original color
  $('h1, h2').mouseout(function() {
	  $(this).css('color', 'green');
  });
  
});