import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import {  EditionsService } from 'app/shared/services/connect/data/editions/editions.service';
import {  Edition, Participant } from 'app/shared/services/connect/data/data.models';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApperanceService} from '../services/apperance.service' 

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
    private apperanceService:ApperanceService
  ) {
  }
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      
         let id = +this.route.snapshot.paramMap.get('id');
         this.service.getEdition(id).subscribe(data =>{
           this.edition=data;
           this.participants=data.participants;
           this.apperanceService.changeApperance( data.nazwa);
           
         });
       });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
