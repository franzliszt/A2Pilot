import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Egne importer
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from "./http.service";
import { PersonSokComponent } from "./person-sok.component";
import { PersonComponent } from "./person.component";
import { MainComponent } from "./main.component";
import { ReversePipe } from "./ReversePipe";
import { InstitusjonDetaljerComponent } from "./institusjon-detaljer.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    PersonSokComponent,
    PersonComponent,
    MainComponent,
    ReversePipe,
    InstitusjonDetaljerComponent
  ],
  providers: [
    HttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }