import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
school_name="szkola";
  constructor() {
        
   }
 

  ngOnInit() {

  }
  ngAfterViewChecked(){
  
  }
  ngOnDestroy() {

  }

}
