Meteor.publish('allCourses', function(){
	return Courses.find();
});