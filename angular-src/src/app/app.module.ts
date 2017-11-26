//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { MainModuleModule } from './modules/main-module.module';

// FalseDatabase
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Services

// Components
//  Frame Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FrameModule } from './components/FrameComponents/frame.module';
 // Contact
import { ContactComponent } from './components/contact/contact.component';
// Editions
import { EditionsModule } from './components/editions/editions.module';
//  invalid Route Component
import { InvalidRouteComponent } from './components/FrameComponents/invalid-route/invalid-route.component';
 
//  Home components
import { FormularzComponent} from './components/formularz/formularz.component';

//  Widgets
import { WidgetsModule } from './components/widgets/widgets.module';

// Info
import { InfoModule } from './components/info/info.module';
// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { EditionsRoutingModule } from './components/editions/editions-routing.module';
import { LoadDataService } from './services/connect/load-data.service';
import { SnackbarService } from './services/messages/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FormularzComponent,
    InvalidRouteComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FrameModule,
    EditionsModule,
    WidgetsModule,
    InfoModule,
    HttpModule,
    HttpClientModule,
    MainModuleModule,
    AppRoutingModule,
    EditionsRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [LoadDataService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
