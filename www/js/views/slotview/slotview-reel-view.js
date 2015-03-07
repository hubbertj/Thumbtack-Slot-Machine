define([],function() {
    var SlotViewMain = {

        mainContent: null,

        init: function(options){
            _.extend(this, options);
            
        },

        createViews: function(){
            console.log("this is where we will create our views");
        }  
    };
    return SlotViewMain;
});
