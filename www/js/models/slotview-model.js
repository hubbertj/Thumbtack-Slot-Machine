define(['util/model'],
    function(Model) {

    var SlotViewMachineModel = Model.extend({
        urlRoot: null,

        defaults: {
            
            value: null,
            spinNumber: null
        }
    });

    return SlotViewMachineModel;
});
