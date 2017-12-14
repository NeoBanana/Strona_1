import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'app/shared/components/layout/layout.component';

import { ShowComponent } from 'app/school/show/show.component';



const schoolRoutes: Routes = [
    { path: 'school',component: LayoutComponent,children:[
          {path:':id',component: ShowComponent, data:{title:"szkola"}},
  ]}
   
 
]
@NgModule({
  imports: [
    RouterModule.forChild(
      schoolRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class SchoolRoutingModule { }
