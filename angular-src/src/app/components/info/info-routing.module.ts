import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './general/general.component';
import { RulesComponent } from './rules/rules.component'


const infoRoutes: Routes = [
  
  {path:'info/ogolne',component:GeneralComponent},
  {path:'info/regulaminy',component:RulesComponent},
  {path:'info', redirectTo: '/info/ogolne'}
]
@NgModule({
  imports: [
    RouterModule.forChild(
     infoRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class InfoRoutingModule { }
