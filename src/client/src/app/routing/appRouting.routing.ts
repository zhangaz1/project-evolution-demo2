import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SimpleSnakeComponent } from './../modules/snakes/simpleSnake/simpleSnake.component';

const routes: Routes = [
  { path: '', component: SimpleSnakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
