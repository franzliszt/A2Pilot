import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Person } from "./person";
import { PersonSokService } from "./person-sok.service";
import { InstitusjonDetaljerComponent } from "./institusjon-detaljer.component";
import { INSTITUSJONER } from "./INSTITUSJONER";
import { Institusjon } from "./Institusjon";

@Component({
    moduleId: module.id,
    selector: "main-component",
    templateUrl: "main.component.html",
    styleUrls: [
        "main.component.css",
        "bootstrap.min.css",
        "person-sok.css"
    ],
    providers: [PersonSokService]
})
export class MainComponent {
    title = 'SaiBått';
    undertittel = "Søk etter person eller velg institusjon";
    private sokeOrd = new Subject<string>();
    personer: Observable<Person[]>;
    institusjoner: Array<Institusjon>;

    constructor(
        private personSokService: PersonSokService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.institusjoner = INSTITUSJONER;
        this.personer = this.sokeOrd
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
            // return the http search observable
            ? this.personSokService.sok(term.trim())
            // or the observable of empty heroes if there was no search term
            : Observable.of<Person[]>([]))
            .catch(error => {
                // TODO: håndtere feilmeldinger
                console.log(error);
                return Observable.of<Person[]>([]);
            });
    }

    hent(term: string): void {
        this.sokeOrd.next(term);
    }

    personDetaljer(person: Person): void {
        
    }

    visInstitusjon(id: number): void {
        // TODO: hente data om institusjon
        let link = ["/institusjonDetaljer", id];
        this.router.navigate(link);
        
        
        // TODO: hente info om valgt institusjon
        /*
      $.getJSON("http://localhost:9999/api.scibot/v1/institusjon/" + instID, function(data) {
            sessionStorage.setItem("institusjon", JSON.stringify(data));
        });
        setTimeout('RedirectInstitusjon()', 300);
        */
      
    }
}