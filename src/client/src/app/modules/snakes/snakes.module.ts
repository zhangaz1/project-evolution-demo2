import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleSnakeModule } from './simpleSnake/simpleSnake.module';
import { AdvancedSnakeModule } from './advancedSnake/advancedSnake.module';
import { RxSnakeModule } from './rxSnake/rxSnake.module';
import { OnlineSnakeModule } from './onlineSnake/onlineSnake.module';

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
  declarations: []
})
export class SnakesModule { }
