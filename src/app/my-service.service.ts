import { Injectable } from '@angular/core';
import {ActivatedRoute, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { FormControl, FormGroup, FormArray, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  loggedUser = null;
  list = JSON.parse(localStorage.getItem('table')) || []
  myTab = [];
  table = [];
  savedForm = [];
  
  constructor(private router: Router, private http: HttpClient) {
    if(localStorage.getItem("connected User") || localStorage.getItem("connected User") !== 'null') {
    this.loggedUser = JSON.parse(localStorage.getItem("connected User"));
    } else {
      this.loggedUser = null;
    }
   }

  update(myForm){
    this.myTab.push(myForm)
    localStorage.setItem('table', JSON.stringify(this.myTab))
    for (let i = 0; i < this.myTab.length; i++) {
      // console.log(myForm.userName);
      this.myTab[i].userName = this.list.userName
      this.myTab[i].firstName = this.list.firstName
      this.myTab[i].lastName = this.list.lastName
      this.myTab[i].email = this.list.email
      this.myTab[i].password = this.list.password
      
    }
  }

  delete(i) {
    this.myTab.splice(i, 1)
  }

  logout() {
    this.loggedUser = null;
    localStorage.setItem("connected User", null);
    this.router.navigateByUrl('/login');
  }
  saveUser(registerForm) {
    this.savedForm.push(registerForm)
    localStorage.setItem('users', JSON.stringify(this.savedForm))
    this.router.navigateByUrl('/login');
  }

  getUsers(loginForm){
    const userList =  JSON.parse(localStorage.getItem('users')) || []
    for (let i = 0; i < userList.length; i++) {
      if(userList[i].email == loginForm.get("loginMail").value && userList[i].password == loginForm.get("loginPass").value ){
        // alert('good');
        this.loggedUser = userList[i]
        console.log(this.loggedUser);
        localStorage.setItem('connected User', JSON.stringify(this.loggedUser))
        
        this.router.navigateByUrl('/addThings')
      }
      
    }

  }

  // isLoggedIn = false;

  // // store the URL so we can redirect after logging in
  // redirectUrl: string;

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }

}
