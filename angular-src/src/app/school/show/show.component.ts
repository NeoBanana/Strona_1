import { Component, OnInit } from '@angular/core';
import { ApperanceService} from 'app/shared/components/layout/services/apperance.service' 

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private apperanceService:ApperanceService) { }

  ngOnInit() {
    this.apperanceService.changeApperance( "fajna szkola");
  }

}
