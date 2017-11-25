import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../services/load-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
 committees:Array<any>;
 filter:String ="";
  constructor(private LoadDataService: LoadDataService) { }

  ngOnInit() {
    this.committees=  this.LoadDataService.LoadCommittees();
  }

}