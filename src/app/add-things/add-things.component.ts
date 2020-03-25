import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormArray, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';




@Component({
  selector: 'app-add-things',
  templateUrl: './add-things.component.html',
  styleUrls: ['./add-things.component.css']
})
export class AddThingsComponent implements OnInit {

  myForm : FormGroup;
  update : any;
  myTab: any;
  constructor( private formService: MyServiceService, private router : Router) {
    this.myForm = new FormGroup({
        userName : new FormControl("", Validators.required),
        firstName : new FormControl("", Validators.required),
        lastName : new FormControl("", Validators.required),
        email : new FormControl("", Validators.required),
        password : new FormControl("", Validators.required)
      })
  }


  ngOnInit(): void {
    this.myTab = this.formService.myTab;
    this.formService.update(this.myForm.value)
  }
  call() {
    
    this.ngOnInit();

  }
}
