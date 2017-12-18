//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule } from './shared/shared.module'; 

// FalseDatabase
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FrameModule } from './frame/frame.module';

import { AppRoutingModule } from './app-routing.module';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';

import { EditionsService } from 'app/shared/services/connect/data/editions/editions.service';
import { SponsorsService } from 'app/shared/services/connect/data/sponsors/sponsors.service';
import { ComitteesService } from 'app/shared/services/connect/data/comittees/comittees.service';
import { SchoolsService } from './shared/services/connect/data/schools/schools.service';


import { ApperanceService } from 'app/shared/components/layout/services/apperance.service';
import { MainProgressBarService } from './shared/services/progressbars/main-progress-bar.service';

import { SnackbarService } from 'app/shared/services/messages/snackbar.service';
import { ErrorService } from 'app/shared/services/connect/error.service';

@NgModule({
  declarations: [
    AppComponent, 
    InvalidRouteComponent,


  ],
  imports: [
    FrameModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    EditionsService,
    ComitteesService,
     SnackbarService,   
      ErrorService,
      MainProgressBarService,
      ApperanceService,
      SchoolsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
