import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material';
import { FooterComponent } from './footer';
import { SideNavComponent } from './side-nav';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const COMPONENTS = [
  NavigationComponent,
  SideNavComponent,
  FooterComponent,
  PageNotFoundComponent
];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule, FlexLayoutModule, AppMaterialModule]
})
export class ComponentsModule {}
