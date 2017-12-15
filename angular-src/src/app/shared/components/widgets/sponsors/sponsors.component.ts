import { Component, OnInit } from '@angular/core';
import { SponsorsService } from 'app/shared/services/connect/data/sponsors/sponsors.service';
 

@Component({
  selector: 'widgets-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors:Array<any>;
  constructor(private sponsorsService: SponsorsService) { }

  ngOnInit() {
    this.sponsorsService.getSponsors()
    .subscribe(data => this.sponsors = data);
  }

}
