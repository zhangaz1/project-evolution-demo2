import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxSnakeComponent } from './rxSnake.component';

export {
  RxSnakeComponent,
};

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RxSnakeComponent,
  ],
})
export class RxSnakeModule { }
