import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SimpleSnakeComponent } from './../modules/snakes/simpleSnake/simpleSnake.component';
import { AdvancedSnakeComponent } from './../modules/snakes/advancedSnake/advancedSnake.component';
import { RxSnakeComponent } from './../modules/snakes/rxSnake/rxSnake.component';

const routes: Routes = [
  { path: '', redirectTo: 'simpleSnake', pathMatch: 'full' },
  { path: 'simpleSnake', component: SimpleSnakeComponent },
  { path: 'advancedSnake', component: AdvancedSnakeComponent },
  { path: 'rxSnake', component: RxSnakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
