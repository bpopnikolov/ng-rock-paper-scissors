import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RpsGameComponent } from './rps-game.component';
import { GameResultComponent } from './game-result/game-result.component';
import { CanActivateGameGuard } from '../shared/services/game/game.guard';

const gameRoutes: Routes = [
  {
    path: 'game',
    component: RpsGameComponent,
    canActivate: [CanActivateGameGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class RpsGameRoutingModule {}
