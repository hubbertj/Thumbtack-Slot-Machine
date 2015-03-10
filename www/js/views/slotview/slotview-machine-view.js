define(['util/view',
        'text!templates/slotview/slot-machine-tmpl.html'
    ],
    function(View,
        Template) {
        var SlotviewMachineView = View.extend({
            el: null,
            model: null,
            template: _.template(Template),
            events: {
                "click li": "onClick"
            },

            initialize: function(options) {
                _.extend(this, options);
                this.model.bind("change", this.recordResults, this);
            },

            payLine: function(shouldShow) {
                if (shouldShow) {
                    this.$('.pay-line').show();
                } else {
                    this.$('.pay-line').hide();
                }
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                this.$('.pay-line').hide();
                return this;
            },

            recordResults: function() {
                // this is the function where we who save our model
            },

            onClick: function(event) {
                event.stopPropagation();
                event.preventDefault();

                switch ($(event.currentTarget).text()) {
                    case 'Spin':
                        this.payLine(false);
                        this.$('.spin-button').text('Stop');
                        this.trigger('spin:start');
                        break;

                    case 'Stop':
                        this.$('.spin-button').text('Spin');
                        this.payLine(true);
                        this.trigger('spin:stop');
                        break;

                    case 'Bet 500 Credits':
                        console.log('500');
                        break;

                    case 'Bet 100 Credit':
                        console.log('100');
                        break;

                    case 'Bet 200 Credit':
                        console.log('200');
                        break;

                    case 'Bet 5 Credit':
                        console.log('5');
                        break;

                    case 'Bet 2 Credit':
                        console.log('2');
                        break;

                    case 'Bet 1 Credit':
                        console.log('1');
                        break;

                }
                return false;
            }
        });
        return SlotviewMachineView;
    });
