import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
import { ApperanceService } from './services/apperance.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  animations: [
    trigger('loaderLeft', [
      state('load', style({
        
        transform: 'translateX(-70vw)',

      })),
      state('loaded',   style({
        transform: 'translateX(0)'
      })),
      transition('load <=> loaded', animate('0.5s 0.1s ease-in')),
    ]),
    trigger('loaderRight', [
        state('load', style({
          transform: 'translateX(100vw)'
        })),
        state('loaded',   style({
          transform: 'translateX(0)'
        })),
        transition('load <=> loaded', animate('0.5s 0.1s ease-in')),
      ])
  ]
})
export class PublicComponent implements OnInit {
 public loadState = "load";
  titleSubscription:Subscription;
  accentSubscription:Subscription;
  title: String ="Strona główna";
  accent: String = "primary";
  
  constructor(private apperanceService:ApperanceService) {
        
   }


  ngOnInit() {
    this.titleSubscription = this.apperanceService.title$
    .subscribe(item => this.title = item);
    this.accentSubscription = this.apperanceService.accent$
    .subscribe(item => this.accent = item)
  }
  ngAfterViewChecked(){
    this.loadState = "loaded"; 
  }
  ngOnDestroy() {
    console.log("test"); 
    this.loadState = "load"; 
    // prevent memory leak when component is destroyed
    this.titleSubscription.unsubscribe();
    this.accentSubscription.unsubscribe();
  }

}
