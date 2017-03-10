"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PersonSokService = (function () {
    function PersonSokService(http) {
        this.http = http;
    }
    // må endre url
    PersonSokService.prototype.sok = function (term) {
        alert("Søker etter person");
        //return this.http.get(`api/personer/?navn=${term}`)
        var url = "http://localhost:999/api.scibot/v1/person/?navn=";
        return this.http.get("" + url + term)
            .map(function (response) { return response.json().data; });
    };
    PersonSokService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonSokService);
    return PersonSokService;
}());
exports.PersonSokService = PersonSokService;
//# sourceMappingURL=person-sok.service.js.map