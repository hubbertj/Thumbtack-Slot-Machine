define(['util/model'], function(Model) {
    var SlotReelModel = Model.extend({
        
        rootUrl: null,

        defaults: {
            value: null,
            spinNumber: null
        }
    });
    return SlotReelModel;
});
