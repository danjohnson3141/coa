// Wait for document to be ready
$(document).ready(function() {
	$('#image').fadeIn(2000, 'linear', function(){
		$('#image_feedback').html('Image Loaded');
	});
});

// Scroll Example
$('#text_area').scroll(function() {
	var scroll_pos = $('#text_area').scrollTop();
	$('#scroll_feedback').html('You have scrolled to position: '+ scroll_pos);
});

// Toggle Function
$('#click_event').html('Off');
$('#click_me').toggle(function() {
	$('#click_me').attr('value', ' Off ');
	$('#click_event').html('On');
}, function() {
	$('#click_me').attr('value', ' On ');
	$('#click_event').html('Off');
});

$('#signup_form').submit(function() {
	var user_email = $('#user_email').val();
	$('#signup_feedback').html('Signed up as: '+ user_email);
});


//li with fade class
//$("li.fade").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});

// Default email input message
// Default message will show until user clicks (focuses) on the input field.
// When field is blank default message will reappear
var email_default = "Enter your email address..";
$('input[type="email"]').attr('value', email_default).focusin(function() {
	if ($(this).val() == email_default) {
		$(this).attr('value', '');
	}
	$(this).css('background-color', 'yellow').css('color', 'blue');
}).blur(function() {
	if ($(this).val() == '') {
		$(this).attr('value', email_default);
	}
	$(this).css('background-color', 'white').css('color', 'black');
});

function change_size(element, size) {
	var current_size=parseInt(element.css('font-size'));
	if(size=='bigger') {
		var new_size = current_size + 2;
	} else if (size=='smaller') {
		var new_size = current_size - 2;
	}
	element.css('font-size', new_size+'px');
}

$('#smaller').click(function() {
	change_size($('p'), 'smaller');
});

$('#bigger').click(function() {
	change_size($('p'), 'bigger');
});

var count = $('*').length;
//alert('this page has ' + count + ' elements');
var name = $('#name').val();


// Contains Example
$('#search_name').keyup(function() {
	search_name = $(this).val();
	
	$('#names li').removeClass('highlight');
	
	if(jQuery.trim(search_name) != '') {
		$("#names li:contains('" + search_name + "')").addClass('highlight');
	}
});

$("#b1").click(function() {
	var name = $('#name').val();
	$('#h1').text('Hello ' + name);
	$('#b1').attr('value', 'Hello ' + name);
	$('#b1').attr("disabled", true);
});

$("#b2").click(function() {
	$('#b1').attr("disabled", false);
});

// #h1 or p clicked
$('#h1, p').click(function() {
	$('#h1').css('background-color', 'white').css('color', 'blue');
});

$('#h1').bind('mouseenter mouseleave', function() {
	$(this).toggleClass('highlight');
});

$('p').click(function() {
	$('p').css('background-color', 'yellow').css('color', 'blue');
});

// All text elements: focus
$(':text').focusin(function() {
	$(this).css('background-color', 'yellow').css('color', 'blue');
})

// All text elements: out of focus
$(':text').focusout(function() {
	$(this).css('background-color', 'white').css('color', 'black');
})

$('#food').focusin(function() {
	$('#food_text').show();
	$('#food_text').html('Enter your favorite food').fadeOut(1000);
});

$('#food').focusout(function() {
	$('#food_text').html('');
});

$('#name').keyup(function() {
	var user_text = $('#name').val();
	$('#user_text').html(user_text);
});

// Change List
$('#list').change(function() {
	var list_value = $('#list').val();
	$('#list_feedback').html('You have selected: '+ list_value);
});

// Live
$('#file').live({
	change: function() {
		$(this).after('<br>Choose a file <input type="file" id="file"><br>');
	}
});

// Text Area Characters Left
text_max = $('#text_area2').attr('maxlength');
$('#textarea_feedback').html(text_max + ' characters remaining');
$('#text_area2').keyup(function() {
	var text_length = $('#text_area2').val().length;
	var text_remaining = text_max - text_length;
	$('#textarea_feedback').html(text_remaining + ' characters remaining');
});

$('#text_area2').focusin(function() {
	$('#text_area2').html('');
});

// Show/Hide Function.  Toggle button value and visibility

function showHide(buttonElement, hideElement, speed, linear) {
	if($(buttonElement).attr('value')=='Hide') {
		$(buttonElement).attr('value', 'Show');
		$(hideElement).hide(speed, linear);
	} else {
		$(buttonElement).attr('value', 'Hide');
		$(hideElement).show(speed, linear);
	}
}

$('#showHideFast').click(function() {
	showHide('#showHideFast', '#message', 'fast', '');
});

$('#showHideSlow').click(function() {
	showHide('#showHideSlow', '#message', 'slow', '');
});

$('#showHideSlowLinear').click(function() {
	showHide('#showHideSlowLinear', '#message', 3000, 'linear');
});

$('#showHide').toggle(function() {
	$('#showHide').attr('value', 'Show');
	$('#message').hide('slow');
}, function() {
	$('#showHide').attr('value', 'Hide');
	$('#message').show('slow');
});

$('.hover').mousemove(function(e) {
	var hovertext = $(this).attr('hovertext');
	$('#hoverdiv').text(hovertext).show();
	$('#hoverdiv').css('top', e.clientY+15).css('left', e.clientX+10);
	//$('#co').text('x:' + e.clientX + ', '+'y:'+e.clientY);
}).mouseout(function() {
	$('#hoverdiv').hide();
});

$('#imageFadeIn').click(function() {
	$('#image_feedback').html('');
	$('#image').fadeIn(2000, 'linear', function(){
		$('#image_feedback').html('Image Faded In');
	});
});

$('#imageFadeOut').click(function() {
	$('#image_feedback').html('');
	$('#image').fadeOut(2000, 'linear', function(){
		$('#image_feedback').html('Image Faded Out');
	});
});

$('#imageFadeInOut').click(function() {
	$('#image_feedback').html('');
	$('#image').fadeToggle(2000, 'linear', function(){
		$('#image_feedback').html('Fade Complete');
	});
});