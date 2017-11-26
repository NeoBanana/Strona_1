import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../../services/connect/load-data.service';


@Component({
  selector: 'widget-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors:Array<any>;
  constructor(private LoadDataService: LoadDataService) { }

  ngOnInit() {
    this.LoadDataService.getSponsors()
    .subscribe(data => this.sponsors = data);
  }

}
