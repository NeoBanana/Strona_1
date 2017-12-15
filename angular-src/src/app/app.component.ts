import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, NavigationEnd } from '@angular/router';
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressDisplay:boolean=true;
  progressState:number=0;

  progressDisplaySubscription:Subscription;
  progressStateSubscription:Subscription;

    constructor(private router: Router, private progressbar:MainProgressBarService) {
     
    }
      ngOnInit() {
        this.progressDisplaySubscription = this.progressbar.display$
        .subscribe(item => this.progressDisplay = item);
        this.progressStateSubscription = this.progressbar.state$
        .subscribe(item => this.progressState = item);
      }
      ngOnDestroy(){
        this.progressDisplaySubscription.unsubscribe();
        this.progressStateSubscription.unsubscribe();
      }
}
