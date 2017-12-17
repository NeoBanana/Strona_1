import { Component, OnInit } from '@angular/core';
import { ComitteesService } from 'app/shared/services/connect/data/comittees/comittees.service';
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';

@Component({
  selector: 'public-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
 committees:Array<any>;
 filter:String ="";
  constructor(private comitteesService: ComitteesService,
    private progressbar:MainProgressBarService) { }

  ngOnInit() {
    this. comitteesService.getCommittees()
    .subscribe(data => {
      this.committees = data;
    }
    );
  }

}
