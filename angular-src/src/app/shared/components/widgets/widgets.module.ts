import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar/calendar.component';
import { SponsorsComponent} from "./sponsors/sponsors.component";
import { MaterialModule } from 'app/shared/modules/material.module';
import { RouterModule, Routes} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule 
  ],
  declarations: [
    CalendarComponent ,
    SponsorsComponent
  ],
  exports:[
    CalendarComponent ,
    SponsorsComponent
  ]
})
export class WidgetsModule { }
