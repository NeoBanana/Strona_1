import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../../services/load-data.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {
   editions:Array<any> ;
  constructor(private LoadDataService: LoadDataService) { }

  ngOnInit() {
    this.editions=  this.LoadDataService.LoadEditions();
  }

}
