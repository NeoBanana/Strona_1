import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularzComponent} from './components/formularz/formularz.component';
import { ContactComponent } from './components/contact/contact.component';
import { InvalidRouteComponent } from './components/FrameComponents/invalid-route/invalid-route.component';

const appRoutes: Routes = [
  {path:'',component: HomeComponent, data:{title:"Strona główna"}},
  {path:'formularz',component: FormularzComponent, data:{title:"Formularz"}},
  {path:'contact',component: ContactComponent, data:{title:"Kontakt"}},
  { path: '**', component:  InvalidRouteComponent, data:{title:"Strona nie znaleziona",accent:"warn"}}

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
