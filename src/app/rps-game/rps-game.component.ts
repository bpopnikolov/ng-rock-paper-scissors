import { Component, OnInit } from '@angular/core';
import { GameState, RockPaperScissors, GameResult } from '../shared/enums';
import { Subject } from 'rxjs';
import { RpsGameService } from './shared/rps-game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerService } from '../shared/services/player/player.service';
import { PlayersLadderService } from '../shared/services/ladder/players-ladder.service';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.scss']
})
export class RpsGameComponent implements OnInit {
  public $playerSelectedOption: Subject<any>;
  public $onPlayAgain: Subject<any>;
  public GameState = GameState;

  public state = {
    gameState: GameState.Waiting,
    countDownTimer: 0,
    opponentItem: <RockPaperScissors>null,
    playerItem: <RockPaperScissors>null,
    score: {
      player: 0,
      opponent: 0
    },
    lastGameResult: <GameResult>null
  };

  constructor(
    private rpsService: RpsGameService,
    private plService: PlayersLadderService,
    private playerService: PlayerService
  ) {
    this.$playerSelectedOption = new Subject();
    this.$onPlayAgain = new Subject();
  }

  ngOnInit() {
    this.$onPlayAgain.subscribe(() => {
      this.state.gameState = GameState.Waiting;
    });

    this.$playerSelectedOption.subscribe((item: number) => {
      this.state.playerItem = <RockPaperScissors>item;
      this.state.opponentItem = <RockPaperScissors>(
        (Math.floor(Math.random() * 3) + 1)
      );
      this.startGame();
    });
  }

  public startGame(): boolean | null {
    const isWinner = this.rpsService.doesBeat(
      this.state.playerItem,
      this.state.opponentItem
    );

    if (isWinner) {
      this.state.lastGameResult = GameResult.Win;
      this.state.score.player++;
      // add the score to firebase
      this.plService.addPlayerToLadder({
        playerName: this.playerService.playerName,
        score: this.state.score.player
      });
    } else if (isWinner === false) {
      this.state.lastGameResult = GameResult.Loss;
      this.state.score.opponent++;
    } else {
      this.state.lastGameResult = GameResult.Draw;
    }
    this.state.gameState = GameState.Finished;

    return isWinner;
  }
}
