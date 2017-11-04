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
        internalLink:true,
        address:"/",
        submenu:[]
      },
      {
        name:"Edycje",
        internalLink:true,
        address:"#",
        submenu:[
          {
            name:"EDYCJA XIX",
            internalLink:true,
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                internalLink:true,
                address:"#"
              },
              {
                name:"Wyniki",
                internalLink:true,
                address:"#"
              }
            ]
          },
          {
            name:"EDYCJA XVIII",
            internalLink:true,
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                internalLink:true,
                address:"#"
              },
              {
                name:"Wyniki",
                internalLink:true,
                address:"#"
              }
            ]
          },
          {
            name:"EDYCJA XVII",
            internalLink:true,
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
            internalLink:true,
            address:"#",
            submenu:[
              {
                name:"Statystyki",
                internalLink:true,
                address:"#"
              },
              {
                name:"Wyniki",
                internalLink:true,
                address:"#"
              }
            ]
          }
        ]
      },
      {
        name:"Zgłoś się",
        nternalLink:true,
        address:"#",
        submenu:[
          {
            name:"Formularz",
            internalLink:true,
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
            internalLink:false,
            address:'https://www.w3schools.com/angular/angular_http.asp',
            
            submenu:[]
          },
          {
            name:"Komitety Regionalne",
            internalLink:true,
            address:"#",
            submenu:[]
          }
        ]
      }
    ];

    return menu;
  }


}
