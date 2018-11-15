import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material';
import { ContainersModule } from './shared/containers';
import { HomeModule } from './home/home.module';
import { RpsGameModule } from './rps-game/rps-game.module';
import { CanActivateGameGuard } from './shared/services/game/game.guard';
import { PlayerService } from './shared/services/player/player.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RpsGameModule,
    HomeModule,
    AppRoutingModule,
    ContainersModule
  ],
  providers: [CanActivateGameGuard, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
