import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/messages/snackbar.service';
@Component({
  selector: 'app-home',
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
