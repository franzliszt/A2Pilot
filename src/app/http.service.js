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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.personUrl = "http://localhost:9999/api.scibot/v1/person";
        this.institusjonUrl = "http://localhost:9999/api.scibot/vi/institusjon";
        this.testUrl = "/api/personer";
        this.headers = new http_1.Headers({ "Content-type": "application/json" });
    }
    HttpService.prototype.handleError = function (error) {
        alert("Error");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HttpService.prototype.getPerson = function (id) {
        //const url = `${this.personUrl}/${id}`;
        var url = this.testUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.getInstitusjon = function (id) {
        //$.getJSON("http://localhost:9999/api.scibot/v1/institusjon/" + instID, function(data)
        var url = "" + this.institusjonUrl + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map