import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpModel = new UserModel('','','','','','','')
  constructor() { }

  ngOnInit() {
  }

}
