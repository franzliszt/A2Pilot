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

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls:[
        "bootstrap.min.css",
        "font-awesome.min.css",
        "forsideCSS.css",
        "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" 
    ],
    providers: [PersonSokService]
})
export class AppComponent implements OnInit {
    title = 'SaiBått';
    private sokeOrd = new Subject<string>();
    personer: Observable<Person[]>;

    constructor(
        private personSokService: PersonSokService,
        private router: Router
    ) {}

    ngOnInit(): void {
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
        this.searchTerms.next(term);
    }

    hentPerson(): void {
        alert("Hent person");
    }

    RedirectInstitusjon(): void {
        //window.location="http://localhost:9999/prototype2/institusjonsSok/sokInstitusjon.html"
    }

    hentInstitusjon(instID: any): void {
      
      $.getJSON("http://localhost:9999/api.scibot/v1/institusjon/" + instID, function(data) {
            sessionStorage.setItem("institusjon", JSON.stringify(data));
        });
        setTimeout('RedirectInstitusjon()', 300);
      ;
    }
}