import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../../services/load-data.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
participants:Array<any>;
  constructor(private LoadDataService: LoadDataService) { }
  displayedColumns = ['region','city','school_type','school_name','classes'];

  dataSource = new MatTableDataSource<Participant>(this.LoadDataService.LoadParticipants());

  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

   this.dataSource.filter = filterValue;
  }
  ngOnInit() {
   
  }

}
export interface Class {
  class:String;
  language:String;
  guardian:String;
}
 export interface Participant {
  region: string;
  city: String;
  school_type: String;
  school_name:String;
  classes:Array<Class>;
  
}
