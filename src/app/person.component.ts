import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ReversePipe } from "./ReversePipe";
import { Person } from "./Person";
import { HttpService } from "./http.service";
 
@Component({
    moduleId: module.id,
    selector: "person-detaljer",
    templateUrl: "person.component.html",
    styleUrls: [
        "bootstrap.min.css",
        "person.component.css",
        "font-awesome.min.css"
    ]
})
export class PersonComponent implements OnInit {
    @Input() 
    person: Person;

    p: Person;

    arstall: Array<number>;
    personTag: string;
    nviPoengGammel: number;
    nviPoengNytt: number;
    verdiKroner: number;
    nyNorgesRank: number;
    gammeNorgesRank: number;
    status: string;
    tilhorighet: Array<any>; // usikker på data


    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private httpService: HttpService
    ) {}

    ngOnInit(): void {
        this.person = JSON.parse(sessionStorage.getItem("person"));
        /*this.route.params
            .switchMap((params: Params) => this.httpService.getPerson(+params["id"]))
            .subscribe(person => this.person = person);*/
        //alert(this.person);
        this.initArr();
    }

    @ViewChild("myCanvas") myCanvas: ElementRef;

    ngAfterViewInit() {
        let context: CanvasRenderingContext2D = 
            this.myCanvas.nativeElement.getContext("2d");

            // tegne alt her

    }

    private initArr(): void {
        const ARSTALL = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]; 
        this.arstall = ARSTALL;
    }

    skiftAar(ar: number) {
        // hente data for dette året
    }

    tilbakeForside(): void {
        //this.router.navigate(["hjem"]);
        this.location.back();
    }
    
}