
Template.generic_courses.helpers({
	courses: function() {
		return Courses.find({type: 'Generic'});
	}
});