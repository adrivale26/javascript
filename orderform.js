$(document).ready(function() {
	
	var ordertotal = 0;
	var shipping = 0;
	var tax = 0;
	// add cursor to the name field
	$('#name').focus();
	
	// validate form when users moves off form field and display err mssge
	$('#name').blur(function() {
		if($(this).val() == "") {
			$('#nameErr').text('A name is required');
		} else {
			$('#nameErr').text('');
		}
	});
	
	// validate email and display error message
	emailregex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	
	$('#email').blur(function() {
	    if(!$(this).val().match(emailregex)) {
	    	$('#emailErr').text('Enter a valid email');
	    } else {
	    	$('#emailErr').text('');
	    }
});
	// validate address
	$('#address').blur(function() {
	if($(this).val() == "") {
		$('#addressErr').text('A billing address is required');
	} else {
		$('#addressErr').text('');
	}
	});
	
	// validate  city
	$('#city').blur(function() {
	if($(this).val() == "") {
		$('#cityErr').text('A city is required');
	} else {
		$('#cityErr').text('');
	}
	});
	
	// validate zip code, check is user input is numerical values and if zipcode is at least 5 numbers 
	$('#zip').blur(function() {
	    if ($(this).val() == "") {
	      $('#zipErr').text('A zipcode is required');
	    } else if ($(this).val().length < 5)  {
	      $('#zipErr').text('Zipcode must be at least 5 numbers');
	    } else if (!$.isNumeric($(this).val())) {
	      $('#zipErr').text('Enter numeric values only');
	    } else {
	    	$('#zipErr').text('')
	    }
	  }); 
	
	
	// check if box has been click and copy billing info
	 // if user unchecks box remove info
	$('#copy').change(function() {
		if($(this).prop('checked')) {
		$('#shipaddr').val($('#address').val())
		$('#shipcity').val($('#city').val())
		$('#shipstate').val($('#state').val())
		$('#shipzip').val($('#zip').val())
		$('#shipstate').trigger('change')
		} 
		else {
			if($(this).prop('checked') == false) {
			$('#shipaddr').val('')
			$('#shipcity').val('')
			$('#shipstate').val('')
			$('#shipzip').val('')
		    $('#ship').text()
		    $('#tax').text()
			}
			
		}
	});
	
	// add entry to the state dropdown list
	$('#state').val('');
	$('#shipstate').val('');
	
	
	
	// if user unchecks box remove info
	

	// add cursor to the quantity class
	$('.qty').focus();
	
	$('.qty').on('input', function() {
	ordertotal = 0;

	// create for loop to loop through each quantities
	for (var i = 0; i < $('.qty').length; i ++) {
		var quantity = $($('.qty').get(i)).val();
		if (!$.isNumeric(quantity)) {
			quantity = 0;
		}
		// get the id of each flower
		var qtyId = $($('.qty').get(i)).attr('id');
		
        // get the price of each flower
		var price = $('#price' + qtyId).text()
		
		// multiply the price with the qty to get the total 
		var total = quantity * price
		
		$('#total' + qtyId).text(total)
		
	    ordertotal += total;
	}
	
	   // add order total to subtotal cell
	   $('#subt').text(ordertotal)
	   $('#gTotal').text(ordertotal + shipping + tax)
	
});
	
	// if state is TX add tax for other add 0 
   // calculate shipping costs depending on state 
	$('#shipstate').on('change', function () {
	shipping = 0;
    tax = 0;
	ordertotal = 0;
	if ($('#shipstate').val() == 'TX') {
		tax = ordertotal * 0.08;
		shipping = 5.00;
		$('#tax').text(tax)
	} else if ($('#shipstate').val() == 'CA'){
		tax = 0;
		shipping = 20.00;
		$('#tax').text(tax)
	    
	} else if ($('#shipstate').val() == 'NY') {
		tax = 0;
		shipping =  20.00
		$('#ship').text(shipping) 
	}else {
		tax = 0;
		shipping =  10.00
		$('#ship').text(shipping)
	} 
	$('#tax').text(tax);
	$('#ship').text(shipping);
	$('#gTotal').text(ordertotal + tax + shipping)
	
	});
	

	console.log("Ready");
	
	
});
