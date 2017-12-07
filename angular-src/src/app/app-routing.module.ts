import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { SchoolComponent } from './school/school.component';
import { InvalidRouteComponent } from 'app/invalid-route/invalid-route.component';

const appRoutes: Routes = [

  {path:'school',component: SchoolComponent, loadChildren:"./school/school.module#SchoolModule"},
  {path:'public', pathMatch: 'full', component: PublicComponent, loadChildren:"./public/public.module#PublicModule"},
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
