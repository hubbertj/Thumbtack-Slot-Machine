define(['util/view', ],
    function(View) {
        var SlotViewReelView = View.extend({
            el: null,
            mainContent: null,
            model: null,
            template: null,

            //TODO: make a lib which I can call for all the
            // slotview reels to animate the reels 

            initialize: function(options) {
                _.extend(this, options);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
            },

            spinCompeleted: function(evt){
                this.trigger('completed:spin', evt);
            }
        });
        return SlotViewReelView;
    });
