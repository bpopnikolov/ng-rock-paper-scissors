import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  @Input() $onPlayAgain: Subject<any>;
  @Input() gameResult;
  @Input() playerItem;
  @Input() opponentItem;
  public items = ['rock', 'paper', 'scissors'];

  constructor() {}

  ngOnInit() {}

  public onPlayAgain(): void {
    this.$onPlayAgain.next();
  }

  getImgSrc(index): string {
    return `./assets/images/${this.items[index - 1]}.png`;
  }
}
