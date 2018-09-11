import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSnakeComponent } from './advancedSnake.component';

export {
  AdvancedSnakeComponent,
};

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AdvancedSnakeComponent,
  ],
})
export class AdvancedSnakeModule { }
