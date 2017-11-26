import { Component, OnInit } from '@angular/core';
import {LoadDataService} from '../../../services/connect/load-data.service';
import {MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
participants:Array<any>;
dataSource:MatTableDataSource<Participant>;
  constructor(private LoadDataService: LoadDataService) { 

    this.LoadDataService.getParticipants()
    .subscribe(data => this.dataSource = new MatTableDataSource<Participant>(data)
    );

  }
  displayedColumns = ['region','city','school_type','school_name','classes'];

  

  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

   this.dataSource.filter = filterValue;
  }
  ngOnInit() {
   
  }

}
export class TableDataSource extends DataSource<any> {
  constructor(private LoadDataService: LoadDataService) {
    super();
  }
  connect(): Observable<Participant[]> {
    return this.LoadDataService.getParticipants()
  }
  disconnect() {}
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
