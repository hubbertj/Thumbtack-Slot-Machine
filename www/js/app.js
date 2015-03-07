//settings configurations;
thumbtack = {};
thumbtack.viewRoot = 'views/';
thumbtack.modelRoot = 'models/';
thumbtack.collectionRoot = 'collections/';

define(["thumbtackRouter"], function(ThumbtackRouter) {
    var BootApp = {
        boot: function(options) {
        	//Creates routers & navgate to home view;
            thumbtack.router = new ThumbtackRouter();
            Backbone.history.start();
        }
    }
    return BootApp;
});
