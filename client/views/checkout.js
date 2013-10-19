Template.checkout.helpers({
	displayCart: function(){
		
		// var items = Cart.find().fetch();
		// fullItems = [];


		// for (var i = 0; i < items.length; i++) {
		// 	fullItems.push(Courses.findOne({_id:items[i]['product']}));
		// }

		return Cart.find();
	},

	cartNotEmpty: function(){
		return Cart.find().count() !== 0;
	}
});

Template.checkout.events({
	'click .remove': function (e) {

		var key = $(e.target).attr('id');

		Cart.remove(key);
	}
});