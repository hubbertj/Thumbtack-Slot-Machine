thumbtack = {};

define(["thumbtackRouter"], function(ThumbtackRouter) {
    var BootApp = {
        boot: function(options) {
            thumbtack.router = new ThumbtackRouter({});

            //We Navigate to our first view;
            Backbone.history.start({pushState: true, root: ""});
        }
    }
    return BootApp;
});
