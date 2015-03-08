define(['util/view',
        'text!templates/slotview/slot-machine-tmpl.html'
    ],
    function(View,
        Template) {
        var SlotviewMachineView = View.extend({
            el: null,
            model: null,
            template: _.template(Template),


            initialize: function(options) {
                _.extend(this, options);
                // this.model.bind('change', this.render(), this);

            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },


        });
        return SlotviewMachineView;
    });
