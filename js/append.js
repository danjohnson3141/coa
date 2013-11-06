// Wait for document to be ready
$(document).ready(function() {
	count=0;
});

$('#appendButton').click(function() {
	//count++;
	$('.para1').append(++count + ' ');
})