import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { WidgetsModule } from './components/widgets/widgets.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; 
import { RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginElement } from 'app/shared/components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    MaterialModule,
    WidgetsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent,
    LoginElement
  ],
  declarations: [LayoutComponent,LoginElement ]  
})
export class SharedModule { }
