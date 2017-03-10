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
var person_sok_service_1 = require("./person-sok.service");
var AppComponent = (function () {
    function AppComponent(personSokService, router) {
        this.personSokService = personSokService;
        this.router = router;
        this.title = 'SaiBått';
        this.sokeOrd = new Subject_1.Subject();
    }
    AppComponent.prototype.ngOnInit = function () {
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
    AppComponent.prototype.hent = function (term) {
        this.searchTerms.next(term);
    };
    AppComponent.prototype.hentPerson = function () {
        alert("Hent person");
    };
    AppComponent.prototype.RedirectInstitusjon = function () {
        //window.location="http://localhost:9999/prototype2/institusjonsSok/sokInstitusjon.html"
    };
    AppComponent.prototype.hentInstitusjon = function (instID) {
        $.getJSON("http://localhost:9999/api.scibot/v1/institusjon/" + instID, function (data) {
            sessionStorage.setItem("institusjon", JSON.stringify(data));
        });
        setTimeout('RedirectInstitusjon()', 300);
        ;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-app",
            templateUrl: "app.component.html",
            styleUrls: [
                "bootstrap.min.css",
                "font-awesome.min.css",
                "forsideCSS.css",
                "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
            ],
            providers: [person_sok_service_1.PersonSokService]
        }), 
        __metadata('design:paramtypes', [person_sok_service_1.PersonSokService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map