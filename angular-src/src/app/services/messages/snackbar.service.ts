import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { AppComponent} from '../../app.component';
@Injectable()
export class SnackbarService {

  constructor(
    public snackBar: MatSnackBar
  ) {}
  
    popup(message:string) {
      this.snackBar.open( message ,"close", {
        duration: 500,
      });
    }
}
