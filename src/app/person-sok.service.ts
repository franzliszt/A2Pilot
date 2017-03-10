import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from "./Person";

@Injectable()
export class PersonSokService {
    constructor(private http: Http) {}

    // må endre url
    sok(term: string): Observable<Person[]> {
        alert("Søker etter person");
        //return this.http.get(`api/personer/?navn=${term}`)
        const url = `http://localhost:999/api.scibot/v1/person/?navn=`;
        return this.http.get(`${url}${term}`)
        .map(response => response.json().data as Person[]);
    }
}