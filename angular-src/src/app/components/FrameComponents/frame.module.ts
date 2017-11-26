import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModuleModule} from '../../modules/main-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  imports: [
    CommonModule,
    MainModuleModule
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
