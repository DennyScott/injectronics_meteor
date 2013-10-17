Meteor.Router.add({
	'/': 'home',
	'/about' : 'about'
});



/**
 * Creates a global function to search for the current URL. This will be used
 * to determine which navbar <li> will be active.
 * @return {[type]} [description]
 */
curPath = function() {
	c=window.location.pathname;
	var b=c.slice(0,-1);
	var a=c.slice(-1);
	if(b===""){
		return"/";
	}else{
		if(a=="/"){
			return b;
		}else{
			return c;
		}
	}
};