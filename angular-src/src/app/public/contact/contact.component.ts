import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../shared/services/connect/load-data.service';

@Component({
  selector: 'public-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
 committees:Array<any>;
 filter:String ="";
  constructor(private LoadDataService: LoadDataService) { }

  ngOnInit() {
    this.LoadDataService.getCommittees()
    .subscribe(data => this.committees = data);
  }

}
