import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from '../core/core.module';

const routes: Routes = [
  { path: '', redirectTo: 'snakes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
