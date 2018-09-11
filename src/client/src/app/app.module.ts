import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleSnakeModule } from './modules/snakes/simpleSnake/simpleSnake.module';
import { AppRoutingModule } from './routing/appRouting.routing';

import { AppComponent } from './app.component';
import { GamesComponent } from './core/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    SimpleSnakeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
