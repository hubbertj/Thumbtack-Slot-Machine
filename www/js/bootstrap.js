(function($) {
    'use strict';
    var $doc = $(document);
    $(document).ready(function() {
    	//nothing here
    });
})(jQuery);

//configure required js;
require.config({
    baseUrl: "js/",
    paths:{
    	text: 'libs/text',
        image: 'libs/image'   	
    }
});

//Starts our app.
require(["app"], function(App) {
    App.boot();
});
