Template.bs_slider.helpers({
	coursetypes : function(){
		return CourseTypes.find({},{sort:{order:1}});
	}
});