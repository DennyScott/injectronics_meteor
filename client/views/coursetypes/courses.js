Template.courses.rendered = function () {
	
	$('.add-to-cart').popover({placement:"right", trigger: 'manual'});
			$('.add-to-cart').click(function(){
				$(this).popover('show');
			});
};