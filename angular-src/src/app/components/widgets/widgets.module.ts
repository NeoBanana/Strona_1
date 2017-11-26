import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { MainModuleModule } from '../../modules/main-module.module';

@NgModule({
  imports: [
    CommonModule,
    MainModuleModule
  ],
  exports: [
    CalendarComponent,
    SponsorsComponent 
  ],
  declarations: [
    CalendarComponent,
    SponsorsComponent 
  ] 
})
export class WidgetsModule { }
