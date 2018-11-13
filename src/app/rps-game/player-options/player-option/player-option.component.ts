import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { RockPaperScissors } from 'src/app/shared/enums';

@Component({
  selector: 'app-player-option',
  templateUrl: './player-option.component.html',
  styleUrls: ['./player-option.component.scss']
})
export class PlayerOptionComponent implements OnInit {
  public imgSrc = '';
  @Input() public option = '';
  @Input() public $playerSelectedOption: Subject<any>;

  constructor() {}

  ngOnInit() {
    this.imgSrc = `/assets/images/${this.option}.png`;
  }

  onSelectOption() {
    this.$playerSelectedOption.next(RockPaperScissors[this.option]);
  }
}
