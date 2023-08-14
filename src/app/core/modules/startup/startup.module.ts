import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StartupRoutingModule,
    ComponentsModule,
    PagesModule
  ]
})
export class StartupModule { }
