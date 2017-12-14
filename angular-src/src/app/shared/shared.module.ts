import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { WidgetsModule } from './components/widgets/widgets.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; 
import { RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    WidgetsModule,
   
  ],
  exports:[
    MaterialModule,
    WidgetsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent
  ],
  declarations: [LayoutComponent]
})
export class SharedModule { }
