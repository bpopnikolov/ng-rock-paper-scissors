import { FlexLayoutModule } from '@angular/flex-layout/typings';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout';
import { AppMaterialModule } from 'src/app/app-material';
import { ComponentsModule } from '../components';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ComponentsModule, AppMaterialModule, FlexLayoutModule]
})
export class ContainersModule {}
