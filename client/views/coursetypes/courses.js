Template.courses.rendered = function () {
	
	$('.add-to-cart').popover({placement:"right", trigger: 'manual'});
			$('.add-to-cart').click(function(){
				if(Meteor.user() === null)
					$(this).popover('show');
			});
};


Template.courses.helpers({
	displayCourses : function(){
		return CourseTypes.find({}, {sort:{order:1}});
	}
});