import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout';
import { AppMaterialModule } from 'src/app/app-material';
import { ComponentsModule } from '../components';

const CONTAINERS = [LayoutComponent];
@NgModule({
  declarations: CONTAINERS,
  imports: [
    CommonModule,
    ComponentsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: CONTAINERS
})
export class ContainersModule {}
