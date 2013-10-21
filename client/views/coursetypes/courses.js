Template.courses.helpers({
	displayCourses : function(){
		return CourseTypes.find({}, {sort:{order:1}});
	}
});