import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtStudyRoutingModule } from './ut-study-routing.module';
import { UtStudyComponent } from './ut-study.component';
import { LightswitchComponent } from './components/lightswitch/lightswitch.component';


@NgModule({
  declarations: [
    UtStudyComponent,
    LightswitchComponent
  ],
  imports: [
    CommonModule,
    UtStudyRoutingModule
  ]
})
export class UtStudyModule { }
