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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
// Observable class extensions
require('rxjs/add/observable/of');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var INSTITUSJONER_1 = require("./INSTITUSJONER");
var person_sok_service_1 = require("./person-sok.service");
var MainComponent = (function () {
    function MainComponent(personSokService, router) {
        this.personSokService = personSokService;
        this.router = router;
        this.title = 'SaiBått';
        this.undertittel = "Søk etter person eller velg institusjon";
        this.institusjoner = INSTITUSJONER_1.INSTITUSJONER;
        this.sokeOrd = new Subject_1.Subject();
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personer = this.sokeOrd
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.personSokService.sok(term.trim())
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: håndtere feilmeldinger
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    MainComponent.prototype.hent = function (term) {
        this.sokeOrd.next(term);
    };
    MainComponent.prototype.personDetaljer = function (person) {
    };
    MainComponent.prototype.RedirectInstitusjon = function () {
        //window.location="http://localhost:9999/prototype2/institusjonsSok/sokInstitusjon.html"
    };
    MainComponent.prototype.tilInstitusjon = function (id) {
        // gå til ny side
        // kall http get
    };
    MainComponent.prototype.hentInstitusjon = function () {
        /*
      $.getJSON("http://localhost:9999/api.scibot/v1/institusjon/" + instID, function(data) {
            sessionStorage.setItem("institusjon", JSON.stringify(data));
        });
        setTimeout('RedirectInstitusjon()', 300);
        */
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "main-component",
            templateUrl: "main.component.html",
            styleUrls: [
                "main.component.css",
                "bootstrap.min.css",
                "person-sok.css"
            ],
            providers: [person_sok_service_1.PersonSokService]
        }), 
        __metadata('design:paramtypes', [person_sok_service_1.PersonSokService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map