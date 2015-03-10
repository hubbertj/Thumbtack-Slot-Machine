define(['util/view', ],
    function(View) {
        var SlotViewReelView = View.extend({
            el: null,
            mainContent: null,
            myCanvas: null,
            model: null,
            template: null,

            defaultTopReelp: 230,
            defaultMiddleReelp: 420,
            defaultBottomReelp: 610,

            defaultLeftp: 0,
            defaultWidthp: 293,
            defaultHeightp: 180,

            currentTopReelp: null,
            currentMiddleReelp: null,
            currentBottomReelp: null,

            intervalSpeed: 5,

            imagesCollection: null,

            spinnerColor1: '#660000',
            spinnerColor2: '#FF0000',
            spinnerColor3: '#FFFFFF',

            initialize: function(options) {
                _.extend(this, options);
            },

            render: function() {
                this.$el.html(_.template(this.template));

                this.$('canvas')[0].width = 300;
                this.$('canvas')[0].height = 720;
                this.myCanvas = this.$('canvas')[0].getContext("2d");
                this.setDefaults();
                this.startSpin();

                return this;
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

                this.myCanvas.drawImage(this.imagesCollection.bottom, 0, this.currentBottomReelp, this.defaultWidthp, this.defaultHeightp);

                this.currentTopReelp += this.intervalSpeed;
                if (this.currentTopReelp > 700) {
                    this.currentTopReelp = (this.currentMiddleReelp - (this.defaultHeightp + 10));
                    // this.currentTopReelp = 0;
                }

                this.currentMiddleReelp += this.intervalSpeed;
                if (this.currentMiddleReelp > 700) {
                    this.currentMiddleReelp = (this.currentBottomReelp - (this.defaultHeightp + 10));
                    // this.currentMiddleReelp = 0;
                }

                this.currentBottomReelp += this.intervalSpeed;
                if (this.currentBottomReelp > 700) {
                    this.currentBottomReelp = (this.currentTopReelp - (this.defaultHeightp + 10));
                    // this.currentBottomReelp = 0;
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

            },

            spinCompeleted: function(evt) {
                this.trigger('completed:spin', evt);
            }
        });
        return SlotViewReelView;
    });
