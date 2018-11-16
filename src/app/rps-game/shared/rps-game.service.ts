import { Injectable } from '@angular/core';
import { RockPaperScissors } from 'src/app/shared/enums';

@Injectable()
export class RpsGameService {
  constructor() {}

  public doesBeat(
    playerOption: RockPaperScissors,
    opponentOption: RockPaperScissors
  ): any {
    return playerOption === opponentOption
      ? null
      : playerOption === ((opponentOption + 1) % 3 || 3);
  }
}
