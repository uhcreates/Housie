import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
// import { AppService } from './Services/login.service';
import { LoginModel } from './Model/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginModel: LoginModel = new LoginModel();
  constructor() { }

  ngOnInit() {
  }

}
