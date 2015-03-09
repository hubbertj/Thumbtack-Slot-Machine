define(['util/view', ],
    function(View) {
        var SlotViewReelView = View.extend({
            el: null,
            mainContent: null,
            myCanvas: null,
            model: null,
            template: null,

            topReelp: 2,
            middleReelp: 51.3,
            bottomReelp: 100.6,

            //TODO: make a lib which I can call for all the
            // slotview reels to animate the reels 

            initialize: function(options) {
                _.extend(this, options);
            },

            render: function() {
                this.$el.html(_.template(this.template));
                this.myCanvas = this.$('canvas')[0].getContext("2d");
                setInterval($.proxy(this.drawReel, this), 10);
            },

            drawReel: function() {

                var leftp = 5;
                var widthp = 290;
                var heightp = 47.3;

                this.myCanvas.clearRect(0,0,300,300);

                //draw image 1
                this.myCanvas.fillStyle = "rgba(255, 230, 0, .5)";
                this.myCanvas.beginPath();
                this.myCanvas.rect(leftp, this.topReelp, widthp, heightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                //draw image 2
                this.myCanvas.fillStyle = "rgba(230, 255, 0, .5)";
                this.myCanvas.beginPath();
                this.myCanvas.rect(leftp, this.middleReelp, widthp, heightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                //draw image 3
                this.myCanvas.fillStyle = "rgba(200, 255, 0, .5)";
                this.myCanvas.beginPath();
                this.myCanvas.rect(leftp, this.bottomReelp, widthp, heightp);
                this.myCanvas.closePath();
                this.myCanvas.fill();

                this.topReelp++;
                if(this.topReelp > 150){
                    this.topReelp = -10;
                }

                this.middleReelp++;
                if(this.middleReelp > 150){
                    this.middleReelp = -10;
                }

                this.bottomReelp++;
                if(this.bottomReelp > 150){
                    this.bottomReelp = -10;
                }
            },

            spinCompeleted: function(evt) {
                this.trigger('completed:spin', evt);
            }
        });
        return SlotViewReelView;
    });
