Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Deps.autorun(function() {
	if(Meteor.user()){
		Meteor.Router.to('about');
	}
});