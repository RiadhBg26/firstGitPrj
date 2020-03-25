import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, FormControlName, RequiredValidator } from '@angular/forms';

import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : any;
  form: any;
  constructor(private formService: MyServiceService, private route : Router) { 
    this.registerForm = new FormGroup({
      firstName: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      email: new FormControl ('', [Validators.required,
         Validators.email,
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

      password: new FormControl ('', 
      [ Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[a-z]/),Validators.pattern(/[A-Z]/),Validators.pattern(/[0-9]/),
        Validators.pattern(/[$&+,:;=?@#|'<>.^*()%!-]/),
      ]),
      confirmPassword: new FormControl()      
    });


  }

  
  ngOnInit(): void {
    this.form = this.formService.savedForm;
  }

  userSave() {
    this.formService.saveUser(this.registerForm.value)
    this.form = this.formService.savedForm;
     this.route.navigateByUrl('/login');
  
  }

}
