import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SimpleSnakeModule,
  SimpleSnakeComponent,
} from './simpleSnake/simpleSnake.module';

import {
  AdvancedSnakeModule,
  AdvancedSnakeComponent,
} from './advancedSnake/advancedSnake.module';

import {
  RxSnakeModule,
  RxSnakeComponent,
} from './rxSnake/rxSnake.module';

import {
  OnlineSnakeModule,
  OnlineSnakeComponent,
} from './onlineSnake/onlineSnake.module';

export {
  SimpleSnakeComponent,
  AdvancedSnakeComponent,
  RxSnakeComponent,
  OnlineSnakeComponent,
};

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SimpleSnakeModule,
    AdvancedSnakeModule,
    RxSnakeModule,
    OnlineSnakeModule,
  ],
  declarations: [],
})
export class SnakesModule { }
