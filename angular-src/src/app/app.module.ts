//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { MaterialModule } from './modules/material.module';

// Services
import {ValidateService} from './services/validate.service';
import {LoadDataService} from './services/load-data.service';

// Components
//  Frame Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/FrameComponents/navbar/navbar.component';
import { Navbar2Component } from './components/FrameComponents/navbar2/navbar2.component';
import { FooterComponent } from './components/FrameComponents/footer/footer.component';
import { HeaderComponent } from './components/FrameComponents/header/header.component';
import { HomeComponent } from './components/home/home.component';
 // Contact
import { ContactComponent } from './components/contact/contact.component';
// Editions
import {EditionsComponent} from './components/editions/editions.component';
import {ResultsComponent} from './components/editions/results/results.component';
import {StatisticsComponent} from './components/editions/statistics/statistics.component';
import {ParticipantsComponent} from './components/editions/participants/participants.component';

//  invalid Route Component
import { InvalidRouteComponent } from './components/FrameComponents/invalid-route/invalid-route.component';
 
//  Home components
import { FormularzComponent} from './components/formularz/formularz.component';

//  Widgets
import { WidgetsComponent } from './components/widgets/widgets.component';
import { SponsorsComponent } from './components/widgets/sponsors/sponsors.component';
import { CalendarComponent } from './components/widgets/calendar/calendar.component';

// Info
import { GeneralComponent } from './components/info/general/general.component';
import { RulesComponent } from "./components/info/rules/rules.component";

// Pipes
import { SearchPipe } from './pipes/search.pipe';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'formularz',component: FormularzComponent},
  {path:'contact',component: ContactComponent},
  {path: 'edycja/:id', component: EditionsComponent },
  {path:'info/ogolne',component: GeneralComponent},
  {path:'info/regulaminy',component: RulesComponent},
  { path: '**', component:  InvalidRouteComponent }
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Navbar2Component,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    EditionsComponent,
    ResultsComponent,
    StatisticsComponent,
    ParticipantsComponent,
    FormularzComponent,
    InvalidRouteComponent,
    WidgetsComponent,
    SponsorsComponent,
    CalendarComponent,
    GeneralComponent,
    RulesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [ValidateService,LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
