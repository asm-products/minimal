$(document).ready(function() {
	$("#navbar .store-menu").mouseleave();

	$("#navbar #store-dropdown li a").each(function(index, el) {
	    $(this).css({
	    	// 'transition-delay' : i+'ms',
	    	// '-webkit-transition-delay' : i+'ms',
	    	// '-moz-transition-delay' : i+'ms',
	    	// '-ms-transition-delay' : i+'ms',
	    	// '-o-transition-delay' : i+'ms',
	    });
	});
	
    $("#navbar .store-menu").hover(function() {
        console.log("TEST");
        var i = 0;

        $("#navbar #store-dropdown li a").each(function(index, el) {
            console.log("I'm : ", index);
            $(this).css({
            	'transition-delay' : i+'ms',
            	'-webkit-transition-delay' : i+'ms',
            	'-moz-transition-delay' : i+'ms',
            	'-ms-transition-delay' : i+'ms',
            	'-o-transition-delay' : i+'ms',
            });
            i+=100;
        });
    });

    $("#navbar .store-menu").mouseleave(function() {
        var i = 0;
        $("#navbar #store-dropdown li a").each(function(index, el) {
            $(this).css({
            	// 'transition-delay' : i+'ms',
            	// '-webkit-transition-delay' : i+'ms',
            	// '-moz-transition-delay' : i+'ms',
            	// '-ms-transition-delay' : i+'ms',
            	// '-o-transition-delay' : i+'ms',
            });
        });
    });
});