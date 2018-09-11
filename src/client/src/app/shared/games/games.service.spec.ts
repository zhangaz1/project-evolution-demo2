/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GamesService } from './games.service';
import { Observable } from 'rxjs';

import { IGame } from '@@shared/core/interfaces/index';

describe('Service: Games', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesService]
    });
  });

  it('should be injected', inject([GamesService], (service: GamesService) => {
    expect(service).toBeTruthy();
  }));

  describe('Methods', () => {
    let gamesService: GamesService;
    let games: Observable<IGame[]>;

    beforeEach(() => {
      gamesService = TestBed.get(GamesService);
    });

    it('should can get games', () => {
      games = gamesService.getGames();
      expect(games).toBeTruthy();
    });

    describe('games', () => {

      it('should be Observable', () => {
        const result = games instanceof Observable;
        expect(result).toBeTruthy();
      });

    });
  });
});
