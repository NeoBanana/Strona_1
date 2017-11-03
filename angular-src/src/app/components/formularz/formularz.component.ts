import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularz',
  host:{
    class:'md-g md-g--mobile--childs '
  },
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
