import { Injectable } from '@angular/core';
import { Router, RouteConfigLoadStart, NavigationEnd} from '@angular/router';
import { prepareProfile } from 'selenium-webdriver/firefox';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MainProgressBarService { 
 public display= new BehaviorSubject<boolean>(false);
 public state= new BehaviorSubject<number>(0); 

display$ = this.display.asObservable();
state$ = this.state.asObservable();
  
    constructor() {
    }
    toogle(state:boolean){
      this.display.next(state)
    }
    setProgres(progres:number){
      this.state.next(progres);
    }
}

