import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SnackbarService } from 'app/shared/services/messages/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'public-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private messages:SnackbarService,
    private router: Router) { }

  ngOnInit() {
    this.LoginGroup = this._formBuilder.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
      
    });
  }
  /** 
   * if form is submited
   */
  LogIn(event){
    // Show the value of the form
  let loginData = this.LoginGroup.value;
  // { email: 'blah@blah.net', password: 'imnottelling1' }
    if(loginData.login !="admin" && loginData.pass !="admin"){
      this.messages.popup("haslo niepoprawne",1000);
      this.router.navigate(['/login']);
    }
    else{
      this.messages.popup("haslo poprawne",1000,"i");
    }
  }

}
