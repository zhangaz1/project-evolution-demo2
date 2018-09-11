import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { IGame } from '@interfaces/index';

import { GamesService } from '../../shared/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games: Observable<IGame[]>;

  constructor(
    private router: Router,
    private gamesService: GamesService,
  ) { }

  public ngOnInit() {
    this.games = this.gamesService.getGames();
  }

  public showGame(gameId: string) {
    this.router.navigate([gameId]);
  }

}
