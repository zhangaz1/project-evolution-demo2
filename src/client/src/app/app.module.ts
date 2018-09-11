import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SnakesModule } from './modules/snakes/snakes.module';

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
    SnakesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
