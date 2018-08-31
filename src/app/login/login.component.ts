import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginViewModel} from '../Model';
import { ProjectService } from '../project.service';
import{TokenParams} from '../Classes/TokenParams'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenparam:TokenParams;
  loginModel = new LoginViewModel('','','')
  constructor(private _loginservice : ProjectService, private router: Router) { }

   users = [];
  ngOnInit() {
  }
  getLogged() {
    console.log("Open Gmail");
    this._loginservice.login(this.loginModel).subscribe(data => {
    this.tokenparam = data;
    this._loginservice.AccessToken=this.tokenparam.token;
    this.router.navigate(['/displaydata'])

    });
    // this.router.navigate(['/getStarted']);
  }




}
