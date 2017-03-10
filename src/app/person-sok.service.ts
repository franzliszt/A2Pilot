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
        //return this.http.get(`api/personer/?navn=${term}`)
        //const url = `http://localhost:9999/api.scibot/v1/person/?navn=`;

        //return this.http.get(`${url}${term}`)
        return this.http
        .get(`app/personer/?navn=${term}`)
        .map(response => response.json().data as Person[]);
    }
}