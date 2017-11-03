import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  host:{
    class:'md-g md-g--r1'
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
