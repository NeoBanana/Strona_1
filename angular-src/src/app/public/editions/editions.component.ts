import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import {  EditionsService } from 'app/shared/services/connect/data/editions/editions.service';
import {  Edition, Participant } from 'app/shared/services/connect/data/data.models';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApperanceService} from 'app/shared/components/layout/services/apperance.service' 
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';
@Component({
  selector: 'public-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.scss']
})
export class EditionsComponent implements OnInit {
  participants:Array<Participant>;
   edition:Edition;
  private sub: any;
 
  constructor(
    private service: EditionsService,
    private route: ActivatedRoute,
    private apperanceService:ApperanceService,
    private progressbar:MainProgressBarService
  ) {
  }
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
          this.progressbar.toggle(true);
         let id = +this.route.snapshot.paramMap.get('id');
         this.service.getEdition(id).subscribe(data =>{
           this.edition=data;
           this.participants=data.participants;
           this.apperanceService.changeApperance( data.nazwa);
           this.progressbar.toggle(false);
           
         });
       });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
