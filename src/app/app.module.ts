import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material';
import { ContainersModule } from './shared/containers';
import { HomeModule } from './home/home.module';
import { RpsGameModule } from './rps-game/rps-game.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RpsGameModule,
    HomeModule,
    AppRoutingModule,
    ContainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
