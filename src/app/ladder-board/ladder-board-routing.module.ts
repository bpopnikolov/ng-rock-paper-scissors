import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadderBoardComponent } from './ladder-board.component';
import { PlayersLadderComponent } from './players-ladder/players-ladder.component';

const routes: Routes = [
  {
    path: '',
    component: LadderBoardComponent,
    children: [
      {
        path: 'players',
        component: PlayersLadderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LadderBoardRoutingModule {}
