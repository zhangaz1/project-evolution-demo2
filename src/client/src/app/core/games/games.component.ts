import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/games/games.service';
import { Observable } from 'rxjs';

import { IGame } from '@interfaces/index';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games: Observable<IGame[]>;

  constructor(
    private gamesService: GamesService,
  ) { }

  public ngOnInit() {
    this.games = this.gamesService.getGames();
  }

  public runGame(gameId: string) {
    console.log('run game:', gameId);
  }
}
