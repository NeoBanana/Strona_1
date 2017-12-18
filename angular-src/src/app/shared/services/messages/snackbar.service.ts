import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(
    public snackBar: MatSnackBar
  ) {}
  

    /**
     * popup a message snackbar 
     * 
     * message, duration, apperance:
     * - "e" : error
     * - "i" : info
     * - "s" : success
     * @param message -text of message
     * @param duration -how long is snackbar visible in miliseconds
     * @param apperance -apperance: colors for snackbar: 
     */
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
      this.snackBar.open( message ,'zamknij',{
        duration: duration,
        extraClasses: [view]
      });
    }
}


