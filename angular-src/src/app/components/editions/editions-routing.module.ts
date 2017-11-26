import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {EditionsComponent} from './editions.component';


const editionRoutes: Routes = [
  {path:'edycja/:id',component:EditionsComponent}

]
@NgModule({
  imports: [
    RouterModule.forChild(
     editionRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class EditionsRoutingModule { }
