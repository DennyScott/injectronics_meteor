Meteor.publish('courses', function(){
	return Courses.find();
});

Meteor.publish('courseTypes', function(){
	return CourseTypes.find();
});