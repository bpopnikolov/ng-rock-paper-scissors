import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpsGameRoutingModule } from './rps-game-routing.module';
import { RpsGameComponent } from './rps-game.component';
import { PlayerOptionsComponent } from './player-options/player-options.component';
import { PlayerOptionComponent } from './player-options/player-option/player-option.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { RpsGameService } from './shared/rps-game.service';
import { GameResultComponent } from './game-result/game-result.component';

@NgModule({
  declarations: [
    RpsGameComponent,
    PlayerOptionsComponent,
    PlayerOptionComponent,
    PlayerScoreComponent,
    GameResultComponent
  ],
  imports: [
    CommonModule,
    RpsGameRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [RpsGameService]
})
export class RpsGameModule {}
