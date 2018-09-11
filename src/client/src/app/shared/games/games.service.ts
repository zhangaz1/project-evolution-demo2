import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IGame } from '@@shared/core/interfaces/index';
import { Game } from '@@shared/core/models/index';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  public getGames(): Observable<IGame[]> {
    return of([
      new Game('simpleSnake', 'simple snake'),
      new Game('advancedSnake', 'advanced snake'),
      new Game('rxSnake', 'rx snake'),
      new Game('onlineSnake', 'online snake'),
    ]);
  }

}
