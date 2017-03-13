import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Person } from "./Person";
import { Institusjon } from "./Institusjon";

@Injectable()
export class HttpService {
    private personUrl = "http://localhost:9999/api.scibot/v1/person";
    private institusjonUrl = "http://localhost:9999/api.scibot/vi/institusjon";

    private testUrl = "/api/personer";
    private headers = new Headers({"Content-type": "application/json"});

    constructor(private http: Http) {}

    private handleError(error: any): Promise<any> {
        alert("Error");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getPerson(id: number): Promise<Person> {
        //const url = `${this.personUrl}/${id}`;
        const url = `${this.testUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Person)
            .catch(this.handleError);
    }

    getInstitusjon(id: any): Promise<Institusjon> {
        //$.getJSON("http://localhost:9999/api.scibot/v1/institusjon/" + instID, function(data)
        const url = `${this.institusjonUrl}${id}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Institusjon)
        .catch(this.handleError);
    }
}