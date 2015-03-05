define([],function() {
    var ThumbtackRouter = Backbone.Router.extend({

        routes: {
            ""					: "defaultRoute",
            "/"					: "defaultRoute",
            "slotview"			: "slotview"
        },

        defaultRoute: function() {
            this.gotoPage('slotview');
        },

        slotview: function(){
        	console.log("go to slotsview");
        },

        gotoPage: function(page) {
            this.navigate(page,{trigger: true});
        }
    });
    return ThumbtackRouter;
});
