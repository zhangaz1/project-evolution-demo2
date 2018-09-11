import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineSnakeComponent } from './onlineSnake.component';

export {
  OnlineSnakeComponent,
};

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    OnlineSnakeComponent,
  ],
})
export class OnlineSnakeModule { }
