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





@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls:[
        "app.component.css",
        "font-awesome.min.css",
        "person-sok.css",
        "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" 
    ]
})
export class AppComponent { }