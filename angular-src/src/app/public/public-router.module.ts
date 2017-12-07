import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';

import { HomeComponent } from './home/home.component';
import { FormularzComponent} from './formularz/formularz.component';
import { ContactComponent } from './contact/contact.component';
import{ LoginComponent } from './login/login.component';

const publicRoutes: Routes = [
    { path: '',component:PublicComponent,children:[
          {path:'',component: HomeComponent, data:{title:"Strona główna"}},
          {path:'formularz',component: FormularzComponent, data:{title:"Formularz"}},
          {path:'contact',component: ContactComponent, data:{title:"Kontakt"}},
          {path:'login',component: LoginComponent, data:{title:"Login"}},
          {path:'', loadChildren:'./info/info.module#InfoModule' }, 
          {path:'', loadChildren:'./editions/editions.module#EditionsModule' }, 
    ]}
  
 
]
@NgModule({
  imports: [
    RouterModule.forChild(
      publicRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class PublicRoutingModule { }
