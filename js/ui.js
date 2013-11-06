// Wait for document to be ready
$(document).ready(function() {
	$('#progress1').progressbar({value: 0});
	$('#drag').draggable({containment: 'document', cursor: 'move'});
	$('#drag_r').draggable({containment: 'document', cursor: 'move', revert: true, revertDuration: 1500});
	$('#drag_o').draggable({containment: 'document', cursor: 'move', opacity: 0.50});
	$('#drag_image').draggable({containment: 'document', cursor: 'pointer'});
	$('.drag_drop_bacon').draggable({containment: 'document', cursor: 'pointer', revert: true, revertDuration: 1500});
	$('.drag_drop_robot').draggable({containment: 'document', cursor: 'pointer', revert: true, revertDuration: 1500});
	$('#drag_div').draggable({containment: 'document', cursor: 'move'});
	$('#drag_in_div').draggable({containment: 'parent', cursor: 'move'});
	$('#drag_h').draggable({axis: 'x', cursor: 'move'});
	$('#drag_v').draggable({axis: 'y', cursor: 'move'});
	
	$('#drop_bacon').droppable({hoverClass: 'border', 
								tolerance: 'pointer', 
								accept: '.drag_drop_bacon',
								drop: function() {
									$(this).html('<br><center><img src="images/bacon.png" style="width: 120px"></center>');
									//$(this).append($('.drag_drop_bacon'));
									//$('.drag_drop_bacon').clone().appendTo($('#drop_bacon'));
								}});
	$('#drop_robot').droppable({hoverClass: 'border', 
								tolerance: 'pointer', 
								accept: '.drag_drop_robot',
								drop: function() {
									$(this).html('<br><center><img src="images/robot.jpg" style="width: 120px"></center>');
								}});;
								
	$('#resizable').resizable();
});

$('#content').accordion({icons: {'header': 'ui-icon-plus', 'headerSelected': 'ui-icon-minus'},
								  collapsible: 'true'});

$('#date').datepicker();

$('#save').click(function() {
	$('#dialog').attr('title', 'Saved').text('Settings were saved').dialog(
			{buttons: {'Ok' : function() {
				$(this).dialog('close');
			}}});
})

$('#upload').click(function() {
	var val = 0;
	var interval = setInterval(function() {
		val += 1;
		$('#progress').progressbar({value: val});
		$('#percent').text(val + '%');
		if(val == 100) {
			clearInterval(interval);
		}
	}, 50);
})

$('#name, #name1, #name2, #name3').focusout(function() {
	if($(this).val() != '') {
		var val = $('#progress1').progressbar('value');
		val += 25;
		$('#progress1').progressbar({value: val});
		$('#percent1').text(val + '%');
	}
});

$('#sliderH').slider({
	min: 50,
	max: 250,
	slide: function(event, ui) {
		$('#sliderValueH').html(ui.value);
	},
	stop: function(event, ui) {
		$('.robotH').css('width', ui.value);
	}
});

$('#sliderV').slider({
	min: 50,
	max: 250,
	orientation: 'vertical',
	slide: function(event, ui) {
		$('#sliderValueV').html(ui.value);
	},
	stop: function(event, ui) {
		$('.robotV').css('width', ui.value);
	}
});

$('#tabs').tabs({collapsible: true}).find('.ui-tabs-nav').sortable({axis: 'x'});