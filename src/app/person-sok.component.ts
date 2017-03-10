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

import { PersonSokService } from "./person-sok.service";
import { Person } from "./Person";

@Component({
  moduleId: module.id,
  selector: 'person-sok',
  templateUrl: './person-sok.component.html',
  styleUrls: [ './person-sok.component.css' ],
  providers: [PersonSokService]
})
export class PersonSokComponent implements OnInit {
  personer: Observable<Person[]>;

  // Subject produserer en observable event stream.
  // variabelen lager en observable av strenger
  private searchTerms = new Subject<string>();

  constructor(
    private personSokService: PersonSokService,
    private router: Router) {}

  // Push a search term into the observable stream.
  sok(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.personer = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.personSokService.sok(term.trim())
        // or the observable of empty heroes if there was no search term
        : Observable.of<Person[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Person[]>([]);
      });
  }

  tilPersonDetaljer(person: Person): void {
    // TODO: hente person fra api ved å sende id
    let link = ['/personDetaljer', person.id];
    this.router.navigate(link);
  }
}