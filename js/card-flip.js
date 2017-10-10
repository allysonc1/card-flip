$(document).ready(()=>{
	$('#change-perspective').change(function(event) {
		/* Act on the event */
	//	console.log(event)
		var newVal = event.target.value;
		$('#parent').css({
			'perspective': newVal
		});

		// perspective gives the element's CHILDREN a 3d box to play inside of. 
		// without it, the. parent is flat and all transforms will be 2d

		// TO DO:  ********  add a slider instead of having to type the changed numbers

		$('.card-holder').click(function(){
			$(this).toggleClass('flip');
		});
	});
});