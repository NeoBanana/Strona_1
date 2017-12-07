import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../shared/services/messages/snackbar.service';
@Component({
  selector: 'public-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messages:SnackbarService) { }

  pop(){
    this.messages.popup("test");
  }
  ngOnInit() {
  }

}
