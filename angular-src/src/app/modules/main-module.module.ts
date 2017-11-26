import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';


import { RouterModule, Routes} from '@angular/router';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule,
    RouterModule
  ],
  declarations: []
})
export class MainModuleModule { }
