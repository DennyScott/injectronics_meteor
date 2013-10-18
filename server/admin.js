Meteor.methods({
	isAdmin : function(){
		var user = Meteor.user();

		if(user){
			var admin = Admin.findOne({
				'userID' : user._id
			});

			if(admin===undefined)
				// console.log("here");
				return false;
			else
				return true;
			}
		return false;
	}
});