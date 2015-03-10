define([
        thumbtack.viewRoot + 'slotview/slotview-machine-view',
        thumbtack.viewRoot + 'slotview/slotview-reel-view',
        thumbtack.modelRoot + 'slotview-model',
        thumbtack.modelRoot + 'slotreel-model',

        'image!imgs/coffeMaker.png',
        'image!imgs/teaPot.gif',
        'image!imgs/espressoMachine.jpg',

        'image!imgs/espressoTamper.jpeg',
        'image!imgs/coffeeFilter.gif',
        'image!imgs/teaStrainer.jpg'
    ],
    function(
        SlotviewMachineView,
        SlotviewReelView,
        SlotViewMachineModel,
        SlotViewReelModel,

        CoffeMakerImage,
        TeaPotImage,
        EspressoMachineImage,

        EspressoTamper,
        CoffeeFilter,
        TeaStrainer) {
        var SlotViewMain = {

            mainContent: null,

            reelelm: [{
                id: 'reel-left',
                images: {top: TeaPotImage, middle: CoffeMakerImage, bottom: EspressoMachineImage}
            }, {
                id: 'reel-middle',
                images: {top: EspressoTamper, middle: CoffeeFilter, bottom: TeaStrainer}
            }, {
                id: 'reel-right',
                images: {top: TeaPotImage, middle: CoffeMakerImage, bottom: EspressoMachineImage}
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
                        template: '<canvas></canvas>',
                        model: new SlotViewReelModel(),
                        imagesCollection: value.images,
                        intervalSpeed: Math.floor((Math.random() * 10) + 1)
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
