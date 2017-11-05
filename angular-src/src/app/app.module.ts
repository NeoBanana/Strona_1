//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

// Services
import {ValidateService} from './services/validate.service';
import {LoadDataService} from './services/load-data.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularzComponent} from './components/formularz/formularz.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';

 

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'formularz',component: FormularzComponent},
  { path: '**', component:  InvalidRouteComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FormularzComponent,
    SidemenuComponent,
    CalendarComponent,
    InvalidRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
