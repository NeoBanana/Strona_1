import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoadDataService {

  constructor(private http:Http) { }

  LoadMainMenu(){
    let menu=
    [
      {
        "name":"Strona Główna",
        "address":"/"
      },
      {
        "name":"Edycje",
        "address":"#",
        "submenu":[
          {
            "name":"EDYCJA XIX",
            "address":"#",
            "submenu":[
              {
                "name":"Statystyki",
                "address":"#"
              },
              {
                "name":"Wyniki",
                "address":"#"
              }
            ]
          },
          {
            "name":"EDYCJA XVIII",
            "address":"#",
            "submenu":[
              {
                "name":"Statystyki",
                "address":"#"
              },
              {
                "name":"Wyniki",
                "address":"#"
              }
            ]
          },
          {
            "name":"EDYCJA XVII",
            "address":"#",
            "submenu":[
              {
                "name":"Statystyki",
                "address":"#"
              },
              {
                "name":"Wyniki",
                "address":"#"
              }
            ]
          },
          {
            "name":"EDYCJA XVI",
            "address":"#",
            "submenu":[
              {
                "name":"Statystyki",
                "address":"#"
              },
              {
                "name":"Wyniki",
                "address":"#"
              }
            ]
          }
        ]
      },
      {
        "name":"Zgłoś się",
        "address":"#",
        "submenu":[
          {
            "name":"Formularz",
            "address":"/formularz"
          }
        ]
      },
      {
        "name":"Komitety",
        "address":"#",
        "submenu":[
          {
            "name":"Komitet Krajowy",
            "address":"#"
          },
          {
            "name":"Komitety Regionalne",
            "address":"#"
          }
        ]
      }
    ];

    return menu;
  }


}
