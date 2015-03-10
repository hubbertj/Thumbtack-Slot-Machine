define(['util/view', ],
    function(View) {
        var SlotViewReelView = View.extend({
            el: null,
            id: null,
            mainContent: null,
            myCanvas: null,
            model: null,
            template: null,

            cHeigth: 720,
            cWidth: 300,

            defaultTopReelp: 230,
            defaultMiddleReelp: 420,
            defaultBottomReelp: 610,

            defaultLeftp: 3,
            defaultWidthp: 293,
            defaultHeightp: 180,
            reelMap: null,

            currentTopReelp: null,
            currentMiddleReelp: null,
            currentBottomReelp: null,

            intervalSpeed: 5,
            spinTimer: null,

            payLineMark: 509,

            imagesCollection: null,

            spinnerColor1: '#FFFFFF',
            spinnerColor2: '#FFFFFF',
            spinnerColor3: '#FFFFFF',

            initialize: function(options) {
                _.extend(this, options);
            },

            render: function() {
                this.$el.html(_.template(this.template));

                this.$('canvas')[0].width = this.cWidth;
                this.$('canvas')[0].height = this.cHeigth;
                this.myCanvas = this.$('canvas')[0].getContext("2d");
                this.setDefaults();
                return this;
            },

            setDefaults: function() {
                this.createReels();
            },

            getPayLineItem: function(payline) {
                if (payline < (this.currentTopReelp + this.defaultHeightp) && payline >= this.currentTopReelp) {
                    return this.reelMap["top"];
                } else if (payline < (this.currentMiddleReelp + this.defaultHeightp) && payline >= this.currentMiddleReelp) {
                    return this.reelMap["middle"];
                } else if (payline < (this.currentBottomReelp + this.defaultHeightp) && payline >= this.currentBottomReelp) {
                    return this.reelMap["bottom"];
                } else {
                    //recursion to just find the closet reel;
                    this.getPayLineItem(payline + 10);
                }
            },
            
           

            startSpin: function() {
                this.spinTimer = setInterval($.proxy(this.spinAction, this), 10);
            },

            spinStop: function() {
                if (this.spinTimer) {
                    clearInterval(this.spinTimer);
                }
                var winOutput = this.getPayLineItem(this.payLineMark);
                var idOut = this.id.replace("-", "");

                this.model.set(this.id.replace("-", ""), winOutput);
                this.trigger('completed:spin', winOutput, idOut);
            },

            spinAction: function() {

                this.clearCanvas();

                //draw image 1
                this.myCanvas.fillStyle = this.spinnerColor1;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.currentTopReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();
                this.myCanvas.drawImage(this.imagesCollection.top, 75, this.currentTopReelp + 25, 147, 100);


                //draw image 2
                this.myCanvas.fillStyle = this.spinnerColor2;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.currentMiddleReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();
                this.myCanvas.drawImage(this.imagesCollection.middle, 85, this.currentMiddleReelp, 147, this.defaultHeightp);

                //draw image 3
                this.myCanvas.fillStyle = this.spinnerColor3;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.currentBottomReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();
                this.myCanvas.drawImage(this.imagesCollection.bottom, 5, this.currentBottomReelp, this.defaultWidthp, this.defaultHeightp);

                this.currentTopReelp += this.intervalSpeed;
                this.currentMiddleReelp += this.intervalSpeed;
                this.currentBottomReelp += this.intervalSpeed;

                if (this.currentTopReelp > this.cHeigth) {
                    this.currentTopReelp = (this.currentMiddleReelp - (this.defaultHeightp + 10));
                } else if (this.currentMiddleReelp > this.cHeigth) {
                    this.currentMiddleReelp = (this.currentBottomReelp - (this.defaultHeightp + 10));
                } else if (this.currentBottomReelp > this.cHeigth) {
                    this.currentBottomReelp = (this.currentTopReelp - (this.defaultHeightp + 10));
                }

            },

            //clear canvas;
            clearCanvas: function() {
                this.myCanvas.clearRect(0, 0, this.$('canvas')[0].width, this.$('canvas')[0].height);
            },

            createReels: function() {
                this.clearCanvas();

                //We keep track where the current position is at;
                this.currentTopReelp = this.defaultTopReelp;
                this.currentMiddleReelp = this.defaultMiddleReelp;
                this.currentBottomReelp = this.defaultBottomReelp;


                // draw image 1
                this.myCanvas.fillStyle = this.spinnerColor1;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.defaultTopReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                this.myCanvas.drawImage(this.imagesCollection.top, 75, this.defaultTopReelp + 25, 147, 100);


                //draw image 2
                this.myCanvas.fillStyle = this.spinnerColor2;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.defaultMiddleReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                this.myCanvas.drawImage(this.imagesCollection.middle, 85, this.defaultMiddleReelp, 147, this.defaultHeightp);


                //draw image 3
                this.myCanvas.fillStyle = this.spinnerColor3;
                this.myCanvas.beginPath();
                this.myCanvas.rect(this.defaultLeftp, this.defaultBottomReelp, this.defaultWidthp, this.defaultHeightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                this.myCanvas.drawImage(this.imagesCollection.bottom, 5, this.defaultBottomReelp, this.defaultWidthp, this.defaultHeightp);

            }
        });
        return SlotViewReelView;
    });
