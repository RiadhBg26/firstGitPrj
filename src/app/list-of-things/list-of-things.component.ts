import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-list-of-things',
  templateUrl: './list-of-things.component.html',
  styleUrls: ['./list-of-things.component.css']
})
export class ListOfThingsComponent implements OnInit {  
  myForm : any
  myTab: any;
  table: any;
  constructor(private route: ActivatedRoute,  private formService: MyServiceService ) { }
  ngOnInit(): void {
    this.myTab = this.formService.myTab;
  }
  call() {
    this.formService.update(this.myForm.value)
    this.ngOnInit();
  }
  remove(i){
    this.formService.delete(i);
  }

}
