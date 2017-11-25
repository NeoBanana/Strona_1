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
  LoadSponsors(){
    let sponsors=[
      {
        name:"Polskie Towarzystwo Matematyczne",
        href:"http://www.ptm.org.pl/",
        src:"http://www.mbg.uz.zgora.pl/ptm-logo-150.png"
      },
      {
        name:"Matematyka Bez Granic",
        href:"http://www.mbg.uz.zgora.pl",
        src:"http://www.mbg.uz.zgora.pl/logo.php"
      },{
        name:"Polskie Towarzystwo Matematyczne",
        href:"http://www.ptm.org.pl/",
        src:"https://hdwallsource.com/img/2014/7/large-40566-41516-hd-wallpapers.jpg"
      },
      {
        name:"Polskie Towarzystwo Matematyczne",
        href:"http://www.ptm.org.pl/",
        src:"http://www.mbg.uz.zgora.pl/ptm-logo-150.png"
      },
      {
        name:"Polskie Towarzystwo Matematyczne",
        href:"http://www.ptm.org.pl/",
        src:"http://www.mbg.uz.zgora.pl/ptm-logo-150.png"
      }
    ]
    return sponsors;
  }
  LoadCommittees(){
    let committees=[
      {
         region:"Krajowy Komitet Organizacyjny",
         address:{
            name:"WMIE Uniwersytet Zielonogorski",
            street:"ul.Szafrana 4a",
            postcode:"65-516",
            city:"Zielona Gora",
         },
         moderator:{
           title:"dr",
           firstname:"Krystyna",
           surname:"Białek",
           email:"mbg@wmie.uz.zgora.pl",
           tel:"",
           fax:"",
           www:""

         }
        
      },
        {
          region:"region dolnośląsko-opolski",
          address:{
            name:"Fundacja Matematyków Wrocławskich",
            street:"pl. Grunwaldzki 2/4",
            postcode:"50-384",
            city:"Wroclaw"
          },
            moderator:{
              title:"mgr",
              firstname:"Małgorzata",
              surname:"Mikołajczyk",
              email:"mikolaj@math.uni.wroc.pl",
              tel:"071 336 10 85",
              fax:"",
              www:"www.fmw.uni.wroc.pl/"
            }
          },
          {
            region:"region dolnośląsko-opolski",
            address:{
              name:"Fundacja Matematyków Wrocławskich",
              street:"pl. Grunwaldzki 2/4",
              postcode:"50-384",
              city:"Wroclaw"
            },
              moderator:{
                title:"mgr",
                firstname:"Małgorzata",
                surname:"Mikołajczyk",
                email:"mikolaj@math.uni.wroc.pl",
                tel:"071 336 10 85",
                fax:"",
                www:"www.fmw.uni.wroc.pl/"
              }
            },
            {
              region:"region dolnośląsko-opolski",
              address:{
                name:"Fundacja Matematyków Wrocławskich",
                street:"pl. Grunwaldzki 2/4",
                postcode:"50-384",
                city:"Wroclaw"
              },
                moderator:{
                  title:"mgr",
                  firstname:"Małgorzata",
                  surname:"Mikołajczyk",
                  email:"mikolaj@math.uni.wroc.pl",
                  tel:"071 336 10 85",
                  fax:"",
                  www:"www.fmw.uni.wroc.pl/"
                }
              },
              {
                region:"region dolnośląsko-opolski",
                address:{
                  name:"Fundacja Matematyków Wrocławskich",
                  street:"pl. Grunwaldzki 2/4",
                  postcode:"50-384",
                  city:"Wroclaw"
                },
                  moderator:{
                    title:"mgr",
                    firstname:"Małgorzata",
                    surname:"Mikołajczyk",
                    email:"mikolaj@math.uni.wroc.pl",
                    tel:"071 336 10 85",
                    fax:"",
                    www:"www.fmw.uni.wroc.pl/"
                  }
                }
        


      ]
      return committees;

      
    }
  }

