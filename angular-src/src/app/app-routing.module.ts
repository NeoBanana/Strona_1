import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'app/shared/components/layout/layout.component';

import { InvalidRouteComponent } from 'app/invalid-route/invalid-route.component';

const appRoutes: Routes = [

 
  {path:'',component:  LayoutComponent, loadChildren:"app/public/public.module#PublicModule"},
  {path:'school',component:  LayoutComponent, loadChildren:"app/school/school.module#SchoolModule"},
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

