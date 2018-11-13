import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}