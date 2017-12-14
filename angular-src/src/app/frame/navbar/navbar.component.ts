import { Component, OnInit } from '@angular/core';
import { EditionsService } from 'app/shared/services/connect/data/editions/editions.service';
import { SnackbarService } from 'app/shared/services/messages/snackbar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar', 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
   editions:Array<any> ;
   LoginGroup = this._formBuilder.group({
    login: ['', Validators.required],
    pass: ['', Validators.required]
  });
  constructor(private editionsService: EditionsService, private _formBuilder: FormBuilder,private messages:SnackbarService) { }

  ngOnInit() {

    this.editionsService.getEditionsNames()
    .subscribe(data =>{ 
      this.editions = data;
    });
  }
  LogIn(event){
    // Show the value of the form
  let loginData = this.LoginGroup.value;
  // { email: 'blah@blah.net', password: 'imnottelling1' }
    if(loginData.login !="admin" && loginData.pass !="admin"){
      this.messages.popup("haslo niepoprawne",1000);
    }
    else{
      this.messages.popup("haslo poprawne",1000,"i");
    }
  }

}
 