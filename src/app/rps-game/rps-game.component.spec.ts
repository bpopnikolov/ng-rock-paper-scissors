import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsGameComponent } from './rps-game.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { GameResultComponent } from './game-result/game-result.component';
import { PlayerOptionComponent } from './player-options/player-option/player-option.component';
import { PlayerOptionsComponent } from './player-options/player-options.component';
import { RpsGameService } from './shared/rps-game.service';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  AngularFirestore
} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { PlayerService } from '../shared/services/player/player.service';
import { AppMaterialModule } from '../app-material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersLadderService } from '../shared/services/ladder/players-ladder.service';
import { GameState, RockPaperScissors, GameResult } from '../shared/enums';

describe('RpsGameComponent', () => {
  let component: RpsGameComponent;
  let fixture: ComponentFixture<RpsGameComponent>;
  let service: PlayersLadderService;
  let state = null;
  let spy = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppMaterialModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features,
      ],
      declarations: [
        RpsGameComponent,
        PlayerScoreComponent,
        GameResultComponent,
        PlayerOptionsComponent,
        PlayerOptionComponent
      ],
      providers: [
        RpsGameService,
        PlayerService,
        {
          provide: PlayersLadderService,
          useFactory: (db: AngularFirestore) => {
            return new PlayersLadderService(db);
          },
          deps: [AngularFirestore]
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(PlayersLadderService);
    state = component.state;
    spy = spyOn(service, 'addPlayerToLadder');

    expect(state.gameState).toEqual(GameState.Waiting);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add point to player if he is a winner', () => {
    component.state.playerItem = RockPaperScissors.rock;
    component.state.opponentItem = RockPaperScissors.scissors;

    const gameResult = component.startGame();

    expect(state.score.player).toEqual(1);
    expect(state.score.opponent).toEqual(0);
    expect(state.gameState).toEqual(GameState.Finished);
    expect(state.lastGameResult).toEqual(GameResult.Win);
    expect(spy).toHaveBeenCalled();
  });

  it('should not get point after a loss', () => {
    component.state.playerItem = RockPaperScissors.rock;
    component.state.opponentItem = RockPaperScissors.paper;

    const gameResult = component.startGame();

    expect(state.score.player).toEqual(0);
    expect(state.score.opponent).toEqual(1);
    expect(state.gameState).toEqual(GameState.Finished);
    expect(state.lastGameResult).toEqual(GameResult.Loss);
  });

  it('should not give players points after a draw game', () => {
    component.state.playerItem = RockPaperScissors.rock;
    component.state.opponentItem = RockPaperScissors.rock;

    const gameResult = component.startGame();

    expect(state.score.player).toEqual(0);
    expect(state.score.opponent).toEqual(0);
    expect(state.gameState).toEqual(GameState.Finished);
    expect(state.lastGameResult).toEqual(GameResult.Draw);
  });

  it('it should set players items on $playerSelectedOption', () => {
    const playerItem = 1;
    component.$playerSelectedOption.next(playerItem);

    expect(state.playerItem).toEqual(playerItem);
    // expect opponent item to be a random value between 1 and 3 and
    // playerItem to be equal to playerItem
    expect(state.opponentItem).toBeGreaterThan(0);
    expect(state.opponentItem).toBeLessThanOrEqual(3);
    expect(state.gameState).toEqual(GameState.Finished);
    expect(state.lastGameResult).toEqual(jasmine.any(String));
  });
});
