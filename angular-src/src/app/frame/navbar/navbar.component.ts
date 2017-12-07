import { Component, OnInit } from '@angular/core';
import { EditionsService } from 'app/shared/services/connect/data/editions/editions.service';


@Component({
  selector: 'app-navbar', 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   editions:Array<any> ;
  constructor(private editionsService: EditionsService) { }

  ngOnInit() {
    this.editionsService.getEditionsNames()
    .subscribe(data =>{ 
      this.editions = data;
    });
  }

}
 