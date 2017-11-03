import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host:{
    class:"md-dp6"
  },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
