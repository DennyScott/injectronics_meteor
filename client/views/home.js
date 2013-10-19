Template.home.rendered = function () {
	impulseLoader();
	
    $(window).load(function(){
      $('#cubeSpinner').impulseslider();
    });
	
};