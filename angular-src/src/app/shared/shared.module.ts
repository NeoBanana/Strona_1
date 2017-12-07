import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { WidgetsModule } from './components/widgets/widgets.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; 
import { RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    WidgetsModule,
   
  ],
  exports:[
    MaterialModule,
    WidgetsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
