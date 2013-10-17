/**
 * Subscribe to courses.
 */
Meteor.subscribe("courses");

Template.generic_courses.helpers({
	courses: function() {
		return Courses.find();
	}
});