import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../shared/services/messages/snackbar.service';
@Component({
  selector: 'public-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apperance : String ="i";
  constructor(private messages:SnackbarService) { }

  /**
   * popup snackbar message
   */
  pop(){
    this.messages.popup("test",0,this.apperance);
  }
  ngOnInit() {
  }

}

