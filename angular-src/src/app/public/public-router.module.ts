import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'app/shared/components/layout/layout.component';

import { HomeComponent } from './home/home.component';
import { FormularzComponent} from './formularz/formularz.component';
import { ContactComponent } from './contact/contact.component';
import{ LoginComponent } from './login/login.component';

const publicRoutes: Routes = [
    { path: '', children:[
          {path:'',component: HomeComponent, data:{title:"Strona główna"}},
          {path:'formularz',component: FormularzComponent, data:{title:"Formularz"}},
          {path:'contact',component: ContactComponent, data:{title:"Kontakt"}},
          {path:'login',component: LoginComponent, data:{title:"Login"}},
          {path:'info', loadChildren:'app/public/info/info.module#InfoModule' }, 
          {path:'edycja', loadChildren:'app/public/editions/editions.module#EditionsModule' }, 
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
