import { Component, OnInit, Input } from '@angular/core';
import { Participant } from 'app/shared/services/connect/data/data.models';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent implements OnInit {
@Input() Participant
  constructor() { }

  ngOnInit() {
  }

}
