define([], function() {
    var ThumbtackRouter = Backbone.Router.extend({

        routes: {
            "": "defaultRoute",
            "/": "defaultRoute",
            "slotview": "slotview"
        },

        defaultRoute: function() {
            // this.gotoPage('slotview');
            console.log("do somthing");
        },

        slotview: function() {
            console.log("go to slotsview");
        },
        goHello: function(){
            console.log("go to hello");
        },

        gotoPage: function(page) {
            // var pageNavgation = thumbtack.viewRoot + '/' + page + '/' + page + '-main';

            // require([pageNavgation], function(Page) {
            //     Page.init();
            // });

            this.navigate(page, {trigger: true});
        }
    });
    return ThumbtackRouter;
});
