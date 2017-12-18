import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import {  EditionsRoutingModule } from './editions-routing.module';
import {EditionsComponent} from './editions.component';
import {ResultsComponent} from './results/results.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ParticipantsComponent} from './participants/participants.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EditionsRoutingModule,
  ],
  exports:[
  ],
  declarations: [
    EditionsComponent,
    ResultsComponent,
    StatisticsComponent,
    ParticipantsComponent,
  ],
  providers: []
})
export class EditionsModule { }
 