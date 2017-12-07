import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(
    public snackBar: MatSnackBar
  ) {}
  
    popup(message:string,duration:number = 500) {
      this.snackBar.open( message ,'close', {
        duration: duration,
      });
    }
}
