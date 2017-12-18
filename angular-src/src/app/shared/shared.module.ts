import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MaterialModule } from './modules/material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { LayoutComponent } from './components/layout/layout.component';
import { WidgetsModule } from './components/widgets/widgets.module';

// Data Services
import { EditionsService } from 'app/shared/services/connect/data/editions/editions.service';
import { SponsorsService } from 'app/shared/services/connect/data/sponsors/sponsors.service';
import { ComitteesService } from 'app/shared/services/connect/data/comittees/comittees.service';
import { SchoolsService } from 'app/shared/services/connect/data/schools/schools.service';

// Apperance Services
import { ApperanceService } from 'app/shared/components/layout/services/apperance.service';
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';

// Popup Services
import { SnackbarService } from 'app/shared/services/messages/snackbar.service';
import { ErrorService } from 'app/shared/services/connect/error.service';

console.log("loading shared");
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    MaterialModule,
    WidgetsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent,
  ],
  declarations: [LayoutComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        EditionsService,
        ComitteesService,
        SnackbarService,
        ErrorService,
        MainProgressBarService,
        ApperanceService,
        SchoolsService]
    }
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
