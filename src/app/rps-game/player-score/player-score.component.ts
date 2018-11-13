import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
  animations: [
    trigger('scoreChange', [
      transition('* => *', [
        animate(
          800,
          keyframes([
            style({ 'background-color': 'black', offset: 0 }),
            style({ 'background-color': '#26a69a', offset: 0.2 }),
            style({ 'background-color': 'black', offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class PlayerScoreComponent implements OnInit {
  @Input() score;

  constructor() {}

  ngOnInit() {}
}
