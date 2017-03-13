import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { INSTITUSJONER } from "./INSTITUSJONER";
import { Institusjon } from "./institusjon";
import { HttpService } from "./http.service";

@Component({
    moduleId: module.id,
    selector: "institusjon-component",
    templateUrl: "institusjon-detaljer.component.html",
    styleUrls: ["institusjon-detaljer.component.css"]
})
export class InstitusjonDetaljerComponent implements OnInit {
    institusjoner = INSTITUSJONER;
    institusjon: Institusjon;

    constructor(
        private route: ActivatedRoute,
        private httpService: HttpService,
        private location: Location
    ) {}

    ngOnInit(): void {
        // henter institusjon fra api
        this.route.params
            .switchMap((params: Params) => this.httpService
            .getInstitusjon(+params["id"]))
            .subscribe(institusjon => this.institusjon = institusjon);
    }

    // bytt institusjon
    visInstitusjon(id:number): void {
        // TODO: hent inst fra api og legg det i institusjon
    }
}