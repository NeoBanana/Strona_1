import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularzComponent} from './components/formularz/formularz.component';
import { ContactComponent } from './components/contact/contact.component';
import { InvalidRouteComponent } from './components/FrameComponents/invalid-route/invalid-route.component';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'formularz',component: FormularzComponent},
  {path:'contact',component: ContactComponent},
  //{path: 'edycja/:id', component: EditionsComponent },
 // {path:'info/ogolne',component: GeneralComponent},
 // {path:'info/regulaminy',component: RulesComponent},
  { path: '**', component:  InvalidRouteComponent }
  
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
