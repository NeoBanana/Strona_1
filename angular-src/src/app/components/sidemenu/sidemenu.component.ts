import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  host:{
    class:"md-card md-dp2 md-g--c1 "
  },
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
