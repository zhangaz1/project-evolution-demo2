import { Component, OnInit, ViewChild } from '@angular/core';

import SimpleSnake from '@@shared/modules/snakes/simpleSnake/snake';

@Component({
  selector: 'app-simple-snake',
  templateUrl: './simpleSnake.component.html',
  styleUrls: ['./simpleSnake.component.css']
})
export class SimpleSnakeComponent implements OnInit {

  @ViewChild('gameGround')
  private gameGround;

  private game: SimpleSnake;

  constructor() { }

  public ngOnInit() {
    this.game = new SimpleSnake(this.gameGround.nativeElement);
    this.game.open();
  }

}
