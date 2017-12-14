import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'app/shared/components/layout/layout.component';

import { InvalidRouteComponent } from 'app/invalid-route/invalid-route.component';

const appRoutes: Routes = [

  {path:'school',component: LayoutComponent, loadChildren:"./school/school.module#SchoolModule"},
  {path:'public', pathMatch: 'full', component: LayoutComponent, loadChildren:"./public/public.module#PublicModule"},
  { path: '404', component:  InvalidRouteComponent }, 
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
