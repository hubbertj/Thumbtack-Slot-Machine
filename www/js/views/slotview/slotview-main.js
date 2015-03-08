define([
        thumbtack.viewRoot + 'slotview/slotview-machine-view',
        thumbtack.viewRoot + 'slotview/slotview-reel-view',
        thumbtack.modelRoot + 'slotview-model',
        thumbtack.modelRoot + 'slotreel-model',

        'text!templates/slotview/slot-machine-reel-left.html',
        'text!templates/slotview/slot-machine-reel-middle.html',
        'text!templates/slotview/slot-machine-reel-right.html'
    ],
    function(
        SlotviewMachineView,
        SlotviewReelView,
        SlotViewMachineModel,
        SlotViewReelModel,

        SlotReelLeftTemplate,
        SlotReelMiddleTemplate,
        SlotReelRightTemplate) {
        var SlotViewMain = {

            mainContent: null,

            reelelm: [{
                id: 'reel-left',
                template: _.template(SlotReelLeftTemplate)
            }, {
                id: 'reel-middle',
                template: _.template(SlotReelMiddleTemplate)
            }, {
                id: 'reel-right',
                template: _.template(SlotReelRightTemplate)
            }],

            initialize: function(options) {
                _.extend(this, options);
                this.createMachineView();
                this.createReels();
            },

            createMachineView: function() {
                var slotviewMachineView = new SlotviewMachineView({
                    el: this.mainContent,
                    model: new SlotViewMachineModel()
                }).render();
            },

            createReels: function() {
                _.each(this.reelelm, function(value, index, arr) {
                    var slotviewReelView = new SlotviewReelView({
                        el: '#' + value.id,
                        template: value.template,
                        model: new SlotViewReelModel()
                    }).on('completed:spin', this.recordResults).render();
                }, this);
            },

            recordResults: function() {
                console.log(arguments);
            },

            startSpin: function() {

            },


        };
        return SlotViewMain;
    });
