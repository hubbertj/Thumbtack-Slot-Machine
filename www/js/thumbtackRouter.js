define([], function() {
    var ThumbtackRouter = Backbone.Router.extend({
        mainContent: '#main-content',
        defaultPage: 'slotview',

        routes: {
            "": "defaultRoute",
            "/": "defaultRoute",
            "slotview": "slotview"
        },

        defaultRoute: function() {
            this.goToPage(this.defaultPage);
        },

        slotview: function() {
             this.goToPage('slotview');
        },

        goToPage: function(page) {
            var pageNavgation = thumbtack.viewRoot + page + '/' + page + '-main';

            require([pageNavgation], function(Page) {
                Page.init(this.mainContent);
            });
        }
    });
    return ThumbtackRouter;
});
