import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(
    public snackBar: MatSnackBar
  ) {}
  
    popup(message:string, duration:number = 500, apperance:String="e") {
      let view;
      switch(apperance){
        case "s":
        view="snackbar-success";
      break;
        case "i":
          view="snackbar-info";
        break;
        default:
        view="snackbar-error";
        break;
      }
      this.snackBar.open( message ,'', {
        duration: duration,
        extraClasses: [view]
      });
    }
}


