import { Component, OnInit } from '@angular/core';
import { ComitteesService } from 'app/shared/services/connect/data/comittees/comittees.service';
import { ApperanceService} from 'app/shared/components/layout/services/apperance.service'
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'school-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class SchoolProfileComponent implements OnInit {

  constructor(private apperanceService:ApperanceService,private comitteesService: ComitteesService,
    private progressbar:MainProgressBarService) { }
  committees:Array<any>;
  filter:String ="";

  ngOnInit() {
    this.apperanceService.changeApperance( "fajna szkola");
    this.progressbar.toggle(true);
    this. comitteesService.getCommittees()
    .subscribe(data => {
      this.committees = data;
      this.progressbar.toggle(false);
    }
    );
  }

}
