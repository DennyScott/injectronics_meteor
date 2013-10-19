
Template.generic_courses.helpers({
	courses: function() {
		return Courses.find({type: this.name},{sort:{order:1}});
	}
});

Template.generic_courses.events({
	'click .add-to-cart': function (e) {
		e.preventDefault();

		var key = $(e.target).attr('id');
		alert($(e.target).attr('id'));

		if(Meteor.user() !== null){
			if(Cart.find({product:key}).count()===0){
				var item = Courses.findOne({_id:key});
				Cart.insert({
					product: key,
					name: item.name,
					cost:item.cost,
					number: item.number,
					type: item.type

				});

			$('#myModal').modal('show');
			}
		}
	},

	'click #toCheckout':function(e){
		$('#myModal').modal('hide');
		Meteor.Router.to('/checkout');
	}
});