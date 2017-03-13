"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var personer = [
            {
                id: 11, navn: 'Frode Eika Sandnes',
                status: "Platinum",
                rank: 1,
                rankNytt: 2,
                akronymer: "HIOA",
                poeng: 123,
                poengNytt: 122,
                produksjon: 12,
                assosiasjoner: ["HIOA", "UIO"],
                tidligereAssosiasjoner: ["NTNU, UIT"],
                konkurrenter: ["a", "b"],
                aarlig: ["årlig1", "årlig2"]
            },
            {
                id: 12, navn: 'Lars Larsen',
                status: "Gull",
                rank: 1,
                rankNytt: 2,
                akronymer: "NTNU",
                poeng: 123,
                poengNytt: 122,
                produksjon: 12,
                assosiasjoner: ["HIOA", "UIO"],
                tidligereAssosiasjoner: ["NTNU, UIT"],
                konkurrenter: ["a", "b"],
                aarlig: ["årlig1", "årlig2"]
            },
            {
                id: 13, navn: 'Per Fekt',
                status: "Sølv",
                rank: 1,
                rankNytt: 2,
                akronymer: "UIO",
                poeng: 123,
                poengNytt: 122,
                produksjon: 12,
                assosiasjoner: ["HIOA", "UIO"],
                tidligereAssosiasjoner: ["NTNU, UIT"],
                konkurrenter: ["a", "b"],
                aarlig: ["årlig1", "årlig2"]
            }, {
                id: 14, navn: 'Anne Larsen',
                status: "Påheng",
                akronymer: "UIT",
                poeng: 123,
                poengNytt: 122,
                produksjon: 12,
                assosiasjoner: ["NTNU", "UIO"],
                tidligereAssosiasjoner: ["NTNU, UIT"],
                konkurrenter: ["a", "b"],
                aarlig: ["årlig1", "årlig2"]
            }, {
                id: 15, navn: 'Siri Jensen',
                status: "Grus",
                rank: 1,
                rankNytt: 2,
                akronymer: "HIOA",
                poeng: 123,
                poengNytt: 122,
                produksjon: 12,
                assosiasjoner: ["HIOA", "UIO"],
                tidligereAssosiasjoner: ["NTNU, UIT"],
                konkurrenter: ["a", "b"],
                aarlig: ["årlig1", "årlig2"]
            }
        ];
        return { personer: personer };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map