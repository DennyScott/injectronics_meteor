
Template.generic_courses.helpers({
	courses: function() {
		return Courses.find({type: this.name},{sort:{order:1}});
	}
});

Template.generic_courses.events({
	'click .add-to-cart': function (e) {
		e.preventDefault();

		var key = $(e.target).attr('id');

		if(Meteor.user() !== null){
			if(Cart.find({product:key}).count()===0){
				Cart.insert({
					product: key
				});
			}
		}
	}
});