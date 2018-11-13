import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RpsGameComponent } from './rps-game.component';
import { GameResultComponent } from './game-result/game-result.component';

const gameRoutes: Routes = [
  {
    path: 'game',
    component: RpsGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class RpsGameRoutingModule {}
