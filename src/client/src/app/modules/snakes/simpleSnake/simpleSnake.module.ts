import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSnakeComponent } from './simpleSnake.component';

export {
  SimpleSnakeComponent,
};

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [
    SimpleSnakeComponent,
  ],
})
export class SimpleSnakeModule { }
