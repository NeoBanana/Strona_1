import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { IParticipant } from 'app/shared/services/connect/data/data.models';

@Component({
  selector: 'editions-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  @Input() participants: Array<any>;
  displayedColumns = ['region', 'city', 'school_type', 'school_name'];
  dataSource: MatTableDataSource<IParticipant>;
  constructor() {

  }
  applyFilter(filterValue: string) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

    //  this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.participants);
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.participants);
  }
}

