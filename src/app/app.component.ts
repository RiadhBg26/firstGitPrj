import { Component } from '@angular/core';

import { FormControl, FormGroup, FormArray, Validators, FormBuilder, FormControlName } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { ViewChild } from '@angular/core'
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
