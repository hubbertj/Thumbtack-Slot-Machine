define(['util/view', ],
    function(View) {
        var SlotViewReelView = View.extend({
            el: null,
            mainContent: null,
            myCanvas: null,
            model: null,
            template: null,

            defaultTopReelp: 25.5,
            defaultMiddleReelp: 77.5,
            defaultBottomReelp: 129.5,

            defaultLeftp: 5,
            defaultWidthp: 290,
            defaultHeightp: 50,

            currentTopReelp: null,
            currrentMiddleReelp: null,
            currentBottomReelp: null,

            spinnerColor1: '#660000',
            spinnerColor2: '#FF0000',
            spinnerColor3: '#FFB2B2',

            initialize: function(options) {
                _.extend(this, options);
            },

            render: function() {
                this.$el.html(_.template(this.template));
                this.myCanvas = this.$('canvas')[0].getContext("2d");
                this.setDefaults();
                // this.startSpin();
            },
            setDefaults: function() {
                this.createReels();
            },

            startSpin: function() {
                setInterval($.proxy(this.spinAction, this), 10);
            },

            spinAction: function() {
                this.clearCanvas();

                 //draw image 1
                this.myCanvas.fillStyle = this.spinnerColor1;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.currentTopReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                //draw image 2
                this.myCanvas.fillStyle = this.spinnerColor2;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.currrentMiddleReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                //draw image 3
                this.myCanvas.fillStyle = this.spinnerColor3;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.currentBottomReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                this.currentTopReelp += 1;
                if (this.currentTopReelp > 150) {
                    this.currentTopReelp = (this.currrentMiddleReelp - this.defaultHeightp - 2);
                }

                this.currrentMiddleReelp += 1;
                if (this.currrentMiddleReelp > 150) {
                    this.currrentMiddleReelp = (this.currentBottomReelp - this.defaultHeightp - 2);
                }

                this.currentBottomReelp += 1;
                if (this.currentBottomReelp > 150) {
                    this.currentBottomReelp = (this.currentTopReelp - this.defaultHeightp - 2);
                }
            },
            
            //clear canvas;
            clearCanvas: function() {
                this.myCanvas.clearRect(0, 0, 300, 300);
            },

            createReels: function() {
                this.clearCanvas();

                //We keep track where the current position is at;
                this.currentTopReelp = this.defaultTopReelp;
                this.currrentMiddleReelp = this.defaultMiddleReelp;
                this.currentBottomReelp = this.defaultBottomReelp;



                //draw image 1
                this.myCanvas.fillStyle = this.spinnerColor1;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.defaultTopReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                //draw image 2
                this.myCanvas.fillStyle = this.spinnerColor2;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.defaultMiddleReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                //draw image 3
                this.myCanvas.fillStyle = this.spinnerColor3;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.defaultBottomReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                this.topReelp += 1;
                if (this.topReelp > 150) {
                    this.topReelp = (this.middleReelp - heightp - 2);
                }

                this.middleReelp += 1;
                if (this.middleReelp > 150) {
                    this.middleReelp = (this.bottomReelp - heightp - 2);
                }

                this.bottomReelp += 1;
                if (this.bottomReelp > 150) {
                    this.bottomReelp = (this.topReelp - heightp - 2);
                }
            },

            spinCompeleted: function(evt) {
                this.trigger('completed:spin', evt);
            }
        });
        return SlotViewReelView;
    });
