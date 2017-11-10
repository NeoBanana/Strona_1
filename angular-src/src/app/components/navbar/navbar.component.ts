import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../services/load-data.service';

@Component({
  selector: 'app-navbar',
  host:{
    class:"md-dp6"
  },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public editions ;

  constructor(private LoadDataService: LoadDataService) {
     

   }


  ngOnInit() {
    this.editions=  this.LoadDataService.LoadEditions();
  }

}
