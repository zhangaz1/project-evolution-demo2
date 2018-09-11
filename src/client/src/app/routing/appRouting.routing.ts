import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SimpleSnakeComponent } from './../modules/snakes/simpleSnake/simpleSnake.component';
import { AdvancedSnakeComponent } from './../modules/snakes/advancedSnake/advancedSnake.component';

const routes: Routes = [
  { path: '', redirectTo: 'simpleSnake', pathMatch: 'full' },
  { path: 'simpleSnake', component: SimpleSnakeComponent },
  { path: 'advancedSnake', component: AdvancedSnakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
