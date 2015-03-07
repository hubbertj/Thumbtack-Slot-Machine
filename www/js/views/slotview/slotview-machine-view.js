define(['util/view',
    'text!/views/slotview/slot-machine-tmpl.html'],
    function(View,
            Template) {
        var SlotviewMachineView = View.extend({

            template: _.template(Template),
            model: null,

            initialize: function(options){
                _.extend(this, options);
                // this.model.on('change', this.render(), this);
                // this.model.on('add', this.render(), this);
                // this.model.on('remove', this.render(), this);
            },

            render: function() {
                console.log(this.template);
                console.log('this is where I would draw my view');
                return this;
            },


        });
        return SlotviewMachineView;
    });
