import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LadderBoardRoutingModule } from './ladder-board-routing.module';
import { LadderBoardComponent } from './ladder-board.component';
import { PlayersLadderComponent } from './players-ladder/players-ladder.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material';

@NgModule({
  declarations: [LadderBoardComponent, PlayersLadderComponent],
  imports: [
    CommonModule,
    LadderBoardRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class LadderBoardModule {}
