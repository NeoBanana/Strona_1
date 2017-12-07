import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from 'app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class FrameModule { }
