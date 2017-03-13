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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var Person_1 = require("./Person");
var http_service_1 = require("./http.service");
var PersonComponent = (function () {
    function PersonComponent(router, location, route, httpService) {
        this.router = router;
        this.location = location;
        this.route = route;
        this.httpService = httpService;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.person = JSON.parse(sessionStorage.getItem("person"));
        /*this.route.params
            .switchMap((params: Params) => this.httpService.getPerson(+params["id"]))
            .subscribe(person => this.person = person);*/
        //alert(this.person);
        this.initArr();
    };
    PersonComponent.prototype.ngAfterViewInit = function () {
        var context = this.myCanvas.nativeElement.getContext("2d");
        // tegne alt her
    };
    PersonComponent.prototype.initArr = function () {
        var ARSTALL = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
        this.arstall = ARSTALL;
    };
    PersonComponent.prototype.skiftAar = function (ar) {
        // hente data for dette året
    };
    PersonComponent.prototype.tilbakeForside = function () {
        //this.router.navigate(["hjem"]);
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Person_1.Person)
    ], PersonComponent.prototype, "person", void 0);
    __decorate([
        core_1.ViewChild("myCanvas"), 
        __metadata('design:type', core_1.ElementRef)
    ], PersonComponent.prototype, "myCanvas", void 0);
    PersonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "person-detaljer",
            templateUrl: "person.component.html",
            styleUrls: [
                "bootstrap.min.css",
                "person.component.css",
                "font-awesome.min.css"
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, router_1.ActivatedRoute, http_service_1.HttpService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map