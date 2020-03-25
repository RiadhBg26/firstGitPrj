import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { MyServiceService } from '../my-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formService: MyServiceService, private route : Router) { 
    this.loginForm = new FormGroup({
      loginMail : new FormControl(''),
      loginPass : new FormControl('')
    })
  }
  ngOnInit(): void {
    this.formService.getUsers(this.loginForm)
  }
    
  userGet() {
    this.ngOnInit()

  }


}
