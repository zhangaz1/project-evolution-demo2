import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from '../core/core.module';

import {
  SimpleSnakeComponent,
  AdvancedSnakeComponent,
  RxSnakeComponent,
  OnlineSnakeComponent,
} from '../modules/snakes/snakes.module';


const routes: Routes = [
  { path: 'simpleSnake', component: SimpleSnakeComponent },
  { path: 'advancedSnake', component: AdvancedSnakeComponent },
  { path: 'rxSnake', component: RxSnakeComponent },
  { path: 'onlineSnake', component: OnlineSnakeComponent },

  { path: '', redirectTo: 'simpleSnake', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
