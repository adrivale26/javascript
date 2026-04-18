$(document).ready(function() {
	console.log('Ready!'); 
	
	// create a variable named count and set it to 0
	var count = 0 
	
	var delete_button = ('<span class="del">Remove</span>')

	// add click event to the .add class
	$('.add').click(function(evt) {
		
		//increment cart
		count += 1;
		
		// if count is > 0 hide the empty id
		if (count > 0) {
			$('#empty').hide();
		}
		
		//get names from the text
		var itemName = $(this).attr('name');
		
		//get id attributes of the clicked element
		var itemID = $(this).attr('id')
		
		var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
		
		// use the append method to add the name and delete button
		$('#cart').append(cartLink);
	
		// hide add to cart button
	    $('#' + itemID).hide();  });

     // use a delegate function for the click event 
     // .del remove button 
	$('body').on('click', '.del', function() {
		var itemID = $(this).parent().attr('name');
		$(this).parent().remove();
		count -= 1;
		if(count == 0) {
			$('#empty').show();
		}
		 $('#' + itemID).show()
	});
	
	
	// change the img src to the specified gif using attr
	$('.rating').click(function(evt) {
		$(this).siblings().attr('src', 'staroff.gif');
		$(this).attr('src', 'staron.gif');
		$(this).prevAll().attr('src','staron.gif');
		
		
	});
	
	
});