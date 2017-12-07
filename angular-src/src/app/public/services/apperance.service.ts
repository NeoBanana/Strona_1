import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class ApperanceService {
  private title = new BehaviorSubject<String>("Strona Główna");
  private accent = new BehaviorSubject<String>("primary");
  
  title$ = this.title.asObservable();
  accent$ = this.accent.asObservable();
  constructor(private router: Router) { 
    this.router.events
    .filter((event: any) => event instanceof NavigationEnd)
    .subscribe(() => {
        var root = this.router.routerState.snapshot.root;
        while (root) {
            if (root.children && root.children.length) {
                root = root.children[0];
            } else if (root.data && root.data["title"]  ) {
               
                this.title.next(root.data["title"] ? root.data["title"] :"strona glowna");
                this.accent.next(root.data["accent"] ? root.data["accent"] :"primary" );
               
                return;
            } else { 
                return;
            }
        }
    });
 
  }

  changeApperance(title,accent="primary") {
    this.title.next(title);
    this.accent.next(accent);
  }

}
