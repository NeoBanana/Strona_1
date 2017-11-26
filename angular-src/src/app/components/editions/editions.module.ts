import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModuleModule } from '../../modules/main-module.module';

import {  EditionsRoutingModule } from './editions-routing.module';
import {EditionsComponent} from './editions.component';
import {ResultsComponent} from './results/results.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ParticipantsComponent} from './participants/participants.component';

@NgModule({
  imports: [
    CommonModule,
    MainModuleModule,
    EditionsRoutingModule,
  ],
  exports:[
    EditionsComponent,
    ResultsComponent,
    StatisticsComponent,
    ParticipantsComponent,
    EditionsRoutingModule
  ],
  declarations: [
    EditionsComponent,
    ResultsComponent,
    StatisticsComponent,
    ParticipantsComponent,
  ]
})
export class EditionsModule { }
