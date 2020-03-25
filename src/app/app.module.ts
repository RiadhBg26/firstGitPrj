import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//For Routing
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddThingsComponent } from './add-things/add-things.component';
import { ListOfThingsComponent } from './list-of-things/list-of-things.component';
//Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule} from '@angular/material/chips';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { PipePipe } from './pipe.pipe';
import { MyServiceService } from './my-service.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard} from './auth-guard.guard';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    AddThingsComponent,
    ListOfThingsComponent,
    PipePipe,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    FormsModule,
    MDBBootstrapModule,
    DropdownModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
