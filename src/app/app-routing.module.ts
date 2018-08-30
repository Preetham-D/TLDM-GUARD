import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{HomeComponentComponent} from './home-component/home-component.component'
import {GetStartComponent} from './get-start/get-start.component'
import{VerifyComponent} from './verify/verify.component'
import{LoginComponent} from './login/login.component'
import {TokenComponent} from './token/token.component'
import {DisplaydataComponent} from './displaydata/displaydata.component'
import {SignupComponent} from './signup/signup.component'
import { from } from 'rxjs';

const routes :  Routes =[
  {path : '', component : HomeComponentComponent},
  {path : 'getStarted', component : GetStartComponent},
  {path : 'user', component : VerifyComponent},
  {path : 'login', component : LoginComponent},
  {path : 'verify', component : TokenComponent},
  {path : 'displaydata', component :DisplaydataComponent},
  {path : 'signup', component: SignupComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]

  })

  export class AppRoutingModule{ }
export const routingComponents = [HomeComponentComponent, GetStartComponent, VerifyComponent, LoginComponent, TokenComponent,DisplaydataComponent,SignupComponent];
