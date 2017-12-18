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
    SharedModule.forRoot(),
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
      delay:1500 })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
