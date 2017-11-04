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
        name:"Strona Główna",
        address:"/",
        submenu:[]
      },
      {
        name:"Edycje",
        address:"#",
        submenu:[
          {
            name:"EDYCJA XIX",
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                address:"#"
              },
              {
                name:"Wyniki",
                address:"#"
              }
            ]
          },
          {
            name:"EDYCJA XVIII",
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                address:"#"
              },
              {
                name:"Wyniki",
                address:"#"
              }
            ]
          },
          {
            name:"EDYCJA XVII",
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                address:"#"
              },
              {
                name:"Wyniki",
                address:"#"
              }
            ]
          },
          {
            name:"EDYCJA XVI",
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                address:"#"
              },
              {
                name:"Wyniki",
                address:"#"
              }
            ]
          },
          {
            name:"Poprzednie Edycje",
            address:"http://www.google.pl",
            submenu:[]
          }
        ]
      },
      {
        name:"Zgłoś się",
        address:"#",
        submenu:[
          {
            name:"Formularz",
            address:"/formularz",
            submenu:[]
          }
        ]
      },
      {
        name:"Komitety",
        address:"#",
        submenu:[
          {
            name:"Komitet Krajowy",
            address:'https://www.w3schools.com/angular/angular_http.asp',
            
            submenu:[]
          },
          {
            name:"Komitety Regionalne",
            address:"#",
            submenu:[]
          }
        ]
      }
    ];

    return menu;
  }


}
