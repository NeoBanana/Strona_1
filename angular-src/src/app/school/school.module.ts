
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { SharedModule } from 'app/shared/shared.module'; 

 
import { SchoolRoutingModule } from 'app/school/school-router.module';
import { SchoolProfileComponent } from './profile/profile.component';
import { TeachersComponent } from './profile/teachers/teachers.component';
import { ParticipationComponent } from './profile/participation/participation.component';

@NgModule({
  declarations: [
    SchoolProfileComponent,
    TeachersComponent,
    ParticipationComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SchoolRoutingModule
 
  ],
  providers: [],
  bootstrap: []
})
export class SchoolModule { }
