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
                // this.model.bind('change', this.render(), this);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            onClick: function(event) {
                event.stopPropagation();
                event.preventDefault();

                switch ($(event.currentTarget).text()) {
                    case 'Spin':
                        {
                            this.$('.spin-button').text('Stop');
                            this.trigger('spin:start');
                            break;
                        }
                    case 'Stop':
                        {
                            this.$('.spin-button').text('Spin');
                            this.trigger('spin:stop');
                            break;
                        }

                    case 'Bet 500 Credits':
                        {
                            console.log('500');
                            break;
                        }

                    case 'Bet 100 Credit':
                        {
                            console.log('100');
                            break;
                        }

                    case 'Bet 200 Credit':
                        {
                            console.log('200');
                            break;
                        }

                    case 'Bet 5 Credit':
                        {
                            console.log('5');
                            break;
                        }

                    case 'Bet 2 Credit':
                        {
                            console.log('2');
                            break;
                        }

                    case 'Bet 1 Credit':
                        {
                            console.log('1');
                            break;
                        }
                }


                return false;
            }
        });
        return SlotviewMachineView;
    });
