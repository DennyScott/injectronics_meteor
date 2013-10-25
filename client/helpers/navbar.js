/**
 * Determine if current link should be active. Uses the curPath() from router.js.
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
Handlebars.registerHelper('active', function(path) {
    return curPath() == path ? 'active' : '';
});

Template.navbar.helpers({
	admin: function() {
		Meteor.call('isAdmin', 1, function (error, result) {
			if(error)
				console.log(error);

			Session.set('myAdmin', result);
		});
	},
	user: function() {
		return Meteor.user();
	},

	inCart : function() {
		return Cart.find().count();
	},

	navtype: function() {
		if(Meteor.Router.page() === 'home')
			return 'navbar-fixed-top';
		else
			return 'navbar-static-top';
	}
});