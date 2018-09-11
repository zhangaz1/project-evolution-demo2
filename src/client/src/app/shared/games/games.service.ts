import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IGame } from '@interfaces/index';
import { Game } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  public getGames(): Observable<IGame[]> {
    return of([
      new Game('snake', 'snake'),
      new Game('snake2', 'snake2'),
    ]);
  }

}
