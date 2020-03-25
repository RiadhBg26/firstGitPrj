import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddThingsComponent } from './add-things/add-things.component';
import { ListOfThingsComponent } from './list-of-things/list-of-things.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  {path: '', redirectTo : '/register', pathMatch : 'full'}, // pathMatch: 'full / prefix
  {path: 'addThings', component : AddThingsComponent , canActivate : [AuthGuardGuard] },
  {path: 'listOfThings', component : ListOfThingsComponent, canActivate : [AuthGuardGuard] },
  {path: 'register', component : RegisterComponent },
  {path: 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
