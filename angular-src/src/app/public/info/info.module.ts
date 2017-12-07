import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';


import { GeneralComponent } from './general/general.component';
import { RulesComponent } from "./rules/rules.component";

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,
    

  ],
  declarations: [
    GeneralComponent,
    RulesComponent,
  ]
})
export class InfoModule { }
