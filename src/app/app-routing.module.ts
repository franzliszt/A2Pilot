import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: '', redirectTo: '/hjem', pathMatch: 'full' },
  { path: 'hjem',  component: AppComponent }
];
// RouterModule ligger i exports slik at komponenter har tilgant
// RouterLink og RouterOutlet
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}