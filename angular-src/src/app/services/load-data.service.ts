import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoadDataService {

  constructor(private http:Http) { }

  LoadEditions(){
    let editions=[
      {
        id:1,
        nazwa:"EDYCJA XIX"
      },
      {
        id:2,
        nazwa:"EDYCJA XX"
      },
      {
        id:3,
        nazwa:"EDYCJA XXI"
      },
      {
        id:4,
        nazwa:"EDYCJA XXII"
      }
    ];
    return editions;
  }


}
