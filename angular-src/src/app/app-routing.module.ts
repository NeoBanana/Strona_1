import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'app/shared/components/layout/layout.component';

import { InvalidRouteComponent } from 'app/invalid-route/invalid-route.component';

const appRoutes: Routes = [

 
  {path:'', loadChildren:"./public/public.module#PublicModule"},
  {path:'school', loadChildren:"./school/school.module#SchoolModule"},
  { path: '404', component:  LayoutComponent, children:[
    { path: '', component:  InvalidRouteComponent,data:{title:"blad strony",accent:"warn"}}
  ]}, 
  { path: '**', redirectTo: '/404'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes 
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

