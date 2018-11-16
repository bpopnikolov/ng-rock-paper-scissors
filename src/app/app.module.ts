import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ContainersModule } from './shared/containers';
import { HomeModule } from './home/home.module';
import { RpsGameModule } from './rps-game/rps-game.module';
import { CanActivateGameGuard } from './shared/services/game/game.guard';
import { PlayerService } from './shared/services/player/player.service';
import { LadderBoardModule } from './ladder-board/ladder-board.module';
import { environment } from 'src/environments/environment';
import { PlayersLadderService } from './shared/services/ladder/players-ladder.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    ContainersModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [CanActivateGameGuard, PlayerService,],
  bootstrap: [AppComponent]
})
export class AppModule {}
