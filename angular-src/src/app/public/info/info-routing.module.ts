import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './general/general.component';
import { RulesComponent } from './rules/rules.component'


const infoRoutes: Routes = [
  { path: '',children:[
    {path:'ogolne',component:GeneralComponent ,data:{title:"O Konkursie"}},
    {path:'regulaminy',component:RulesComponent,data:{title:"Regulaminy i Zasady"}},
    {path:'', redirectTo: '/info/ogolne' ,pathMatch: 'full'}
  ]}
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
