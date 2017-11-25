import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../../services/load-data.service';


@Component({
  selector: 'widget-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors:Array<any>;
  constructor(private LoadDataService: LoadDataService) { }

  ngOnInit() {
    this.sponsors=  this.LoadDataService.LoadSponsors();
  }

}
