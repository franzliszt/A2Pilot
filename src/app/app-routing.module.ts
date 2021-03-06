import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { PersonComponent } from "./person.component";
import { MainComponent } from "./main.component";
import { InstitusjonDetaljerComponent } from "./institusjon-detaljer.component";

const routes: Routes = [
  { path: '', redirectTo: '/hjem', pathMatch: 'full' },
  { path: 'hjem',  component: MainComponent },
  { path: 'personDetaljer', component: PersonComponent },
  { path: "institusjonDetaljer/:id", component: InstitusjonDetaljerComponent }
];
// RouterModule ligger i exports slik at komponenter har tilgant
// RouterLink og RouterOutlet
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}