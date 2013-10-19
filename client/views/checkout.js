Template.checkout.helpers({
	displayCart: function(){

		return Cart.find();
	},

	cartNotEmpty: function(){
		return Cart.find().count() !== 0;
	},

	getTotalCost: function(){

		var items = Cart.find().fetch();

		var total = 0;

		for (var i = 0; i < items.length; i++) {
			total += items[i]['cost'];
		}

		return total;
	}
});

Template.checkout.events({
	'click .remove': function (e) {

		var key = $(e.target).attr('id');

		Cart.remove(key);
	}
});