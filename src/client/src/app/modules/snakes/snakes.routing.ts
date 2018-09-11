import { Routes, RouterModule } from '@angular/router';

import {
  SimpleSnakeComponent,
  AdvancedSnakeComponent,
  RxSnakeComponent,
  OnlineSnakeComponent,
} from './snakes.module';

const snakesRoutes: Routes = [
  {
    path: 'snakes',
    children: [
      {
        path: '',
        redirectTo: 'simpleSnake',
        pathMatch: 'full',
      },

      { path: 'simpleSnake', component: SimpleSnakeComponent },
      { path: 'advancedSnake', component: AdvancedSnakeComponent },
      { path: 'rxSnake', component: RxSnakeComponent },
      { path: 'onlineSnake', component: OnlineSnakeComponent },
    ]
  }
];

export const SnakesRoutes = RouterModule.forChild(snakesRoutes);
