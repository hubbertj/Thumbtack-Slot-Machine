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
            listView: [],

            slotviewMachineView: null,
            

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
                this.slotviewMachineView = new SlotviewMachineView({
                    el: this.mainContent,
                    model: new SlotViewMachineModel()
                }).on('spin:start', this.spinReels, this)
                .on('spin:stop', this.spinStop, this).render();
            },

            spinReels:function(){
                _.each(this.listView, function(value, index){
                    value.intervalSpeed = this.getRandomSpeed(17, 30);
                    value.startSpin();
                }, this);
            },

            spinStop:function(){
                 _.each(this.listView, function(value, index){
                    value.intervalSpeed = 0;
                    value.spinStop();
                }, this);
            },

            getRandomSpeed: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

            createReels: function() {
                _.each(this.reelelm, function(value, index, arr) {

                   var slotviewReelView = new SlotviewReelView({
                        el: '#' + value.id,
                        template: '<canvas></canvas>',
                        model: new SlotViewReelModel(),
                        imagesCollection: value.images,
                        intervalSpeed: this.getRandomSpeed(17, 30)
                    }).on('completed:spin', this.recordResults).render();

                   this.listView.push(slotviewReelView);

                }, this);
            },

            recordResults: function() {
                console.log(arguments);
            }


        };
        return SlotViewMain;
    });
