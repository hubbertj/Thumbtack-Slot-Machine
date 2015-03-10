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
            slotViewMachineModel: null,
            slotviewMachineView: null,
            resultOut: {
                reelleft: null,
                reelmiddle: null,
                reelright: null
            },

            reelelm: [{
                id: 'reel-left',
                images: {
                    top: TeaPotImage,
                    middle: CoffeMakerImage,
                    bottom: EspressoMachineImage
                },
                reelMap: {
                    top: "TEAPOT",
                    middle: "COFFEMAKER",
                    bottom: "ESPRESSOMACHINE"
                }
            }, {
                id: 'reel-middle',
                images: {
                    top: EspressoTamper,
                    middle: CoffeeFilter,
                    bottom: TeaStrainer
                },
                reelMap: {
                    top: "ESPRESSOTAMPER",
                    middle: "COFFEEFILTER",
                    bottom: "TEASTRAINER"
                }
            }, {
                id: 'reel-right',
                images: {
                    top: TeaPotImage,
                    middle: CoffeMakerImage,
                    bottom: EspressoMachineImage
                },
                reelMap: {
                    top: "TEAPOT",
                    middle: "COFFEMAKER",
                    bottom: "ESPRESSOMACHINE"
                }
            }],

            initialize: function(options) {
                _.extend(this, options);
                this.slotViewMachineModel = new SlotViewMachineModel();
                this.createMachineView();
                this.createReels();
            },

            createMachineView: function() {

                this.slotviewMachineView = new SlotviewMachineView({
                        el: this.mainContent,
                        model: this.slotViewMachineModel,
                    }).on('spin:start', this.spinReels, this)
                    .on('spin:stop', this.spinStop, this).render();
            },

            spinReels: function() {
                _.each(this.listView, function(value, index) {
                    value.intervalSpeed = this.getRandomSpeed(17, 30);
                    value.startSpin();
                }, this);
            },

            spinStop: function() {
                _.each(this.listView, function(value, index) {
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
                        id: value.id,
                        template: '<canvas></canvas>',
                        reelMap: value.reelMap,

                        model: this.slotViewMachineModel,
                        imagesCollection: value.images,
                        intervalSpeed: this.getRandomSpeed(17, 30)
                    }).on('completed:spin', this.results, this).render();

                    this.listView.push(slotviewReelView);

                }, this);
            },

            //determine if the use is a winner or loser;
            results: function(field, reelID) {
                this.resultOut[reelID] = field;
                if(this.resultOut.reelleft && this.resultOut.reelmiddle && this.resultOut.reelright){
                    console.log(this.resultOut);

                    //clears my obj;
                    _.each(this.resultOut, function(value, index){
                        this.resultOut[index] = null;
                    }, this);

                }
            }
        };
        return SlotViewMain;
    });
