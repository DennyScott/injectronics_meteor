Template.displayItems.helpers({
    first: function() {
        return (this.index % 3) === 0;
    },

    theseCourses: function() {
    	return Courses.find();
    }
});