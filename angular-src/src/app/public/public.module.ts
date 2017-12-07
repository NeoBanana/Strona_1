
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'; 
import { PublicRoutingModule} from './public-router.module';

import { SearchPipe } from '../shared/pipes/search.pipe';

import { PublicComponent } from './public.component';

import { HomeComponent } from './home/home.component';
import { FormularzComponent} from './formularz/formularz.component';
import { ContactComponent } from './contact/contact.component';
import{ LoginComponent } from './login/login.component';
import {EditionsModule } from './editions/editions.module';
import { InfoModule } from './info/info.module';

import { ApperanceService } from './services/apperance.service';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FormularzComponent,
    PublicComponent,
    LoginComponent,
    SearchPipe,
],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    SharedModule,
    InfoModule,
    EditionsModule
 
  ],
  providers: [ApperanceService],
  bootstrap: []
})
export class PublicModule { }
