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
var person_sok_service_1 = require("./person-sok.service");
var PersonSokComponent = (function () {
    function PersonSokComponent(personSokService, router) {
        this.personSokService = personSokService;
        this.router = router;
        // Subject produserer en observable event stream.
        // variabelen lager en observable av strenger
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    PersonSokComponent.prototype.sok = function (term) {
        this.searchTerms.next(term);
    };
    PersonSokComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personer = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.personSokService.sok(term.trim())
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PersonSokComponent.prototype.gotoDetail = function (person) {
        //let link = ['/detail', person.id];
        //this.router.navigate(link);
    };
    PersonSokComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-sok',
            templateUrl: './person-sok.component.html',
            styleUrls: ['./person-sok.component.css'],
            providers: [person_sok_service_1.PersonSokService]
        }), 
        __metadata('design:paramtypes', [person_sok_service_1.PersonSokService, router_1.Router])
    ], PersonSokComponent);
    return PersonSokComponent;
}());
exports.PersonSokComponent = PersonSokComponent;
//# sourceMappingURL=person-sok.component.js.map