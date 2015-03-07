(function($) {
    'use strict';
    var $doc = $(document);
    $(document).ready(function() {
    	//nothing here
    });
})(jQuery);

require.config({
    baseUrl: "js/",
});

//Starts our app.
require(["app"], function(App) {
    App.boot();
});
