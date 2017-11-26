import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../../services/load-data.service';

@Component({
  selector: 'app-navbar', 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   editions:Array<any> ;
  constructor(private LoadDataService: LoadDataService) { }

  ngOnInit() {
    this.editions=  this.LoadDataService.LoadEditions();
  }

}
 