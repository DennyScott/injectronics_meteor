/**
 * Subscribe to courses.
 */

Deps.autorun(function () {
	Meteor.subscribe("courses");
	Meteor.subscribe("courseTypes");
});
