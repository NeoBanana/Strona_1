import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import {EditionsComponent} from './editions.component';


const editionRoutes: Routes = [
  { path: 'edycja',children:[
  {path:':id',component:EditionsComponent,data:{title:'edycje'} }
]}
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
export class EditionsRoutingModule {

 }
