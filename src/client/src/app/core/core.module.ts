import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { GamesComponent } from './games/games.component';

export {
  PageNotFoundComponent,
  GamesComponent,
};

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    PageNotFoundComponent,
    GamesComponent,
  ],
  declarations: [
    PageNotFoundComponent,
    GamesComponent,
  ],
})
export class CoreModule { }
