define([
    thumbtack.viewRoot + 'slotview/slotview-machine-view',
    thumbtack.viewRoot + 'slotview/slotview-reel-view',
    thumbtack.modelRoot + 'slotview-model'
], function(
    SlotviewMachineView,
    SlotviewReelView,
    SlotviewModel) {
    var SlotViewMain = {

        mainContent: null,

        init: function(options) {
            _.extend(this, options);
            this.createMachineView();
            this.createReels();
        },

        createMachineView: function() {
            
            var slotviewMachineView = new SlotviewMachineView({
                el: this.mainContent,
                model: new Backbone.Model()
            }).render();

        },

        createReels: function() {

        },

        startSpin: function() {

        },


    };
    return SlotViewMain;
});
