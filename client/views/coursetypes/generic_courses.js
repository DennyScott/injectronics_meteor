
Template.generic_courses.helpers({
	courses: function() {
		return Courses.find({type: this.name},{sort:{order:1}});
	}
});