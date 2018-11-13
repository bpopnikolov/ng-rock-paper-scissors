import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-player-options',
  templateUrl: './player-options.component.html',
  styleUrls: ['./player-options.component.scss']
})
export class PlayerOptionsComponent implements OnInit {
  @Input() $playerSelectedOption: Subject<any>;

  public options = ['rock', 'paper', 'scissors'];
  constructor() {}

  ngOnInit() {}
}
