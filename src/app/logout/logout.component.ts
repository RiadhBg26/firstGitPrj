import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private formService: MyServiceService, private route : Router) {}

  ngOnInit(): void {
    this.formService.logout()
  }
  logout(){
    this.ngOnInit()
  }
}
