"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var personer = [
            { id: 11, navn: 'Frode Eika Sandnes' },
            { id: 12, navn: 'Håkon Råen' },
            { id: 13, navn: 'Siri Jensen' },
            { id: 14, navn: 'Jon Martin Skranes' },
            { id: 15, navn: 'Geir Jensen' },
            { id: 16, navn: 'Anne Thoren' },
            { id: 17, navn: 'Ane Gaus' }
        ];
        return { personer: personer };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map