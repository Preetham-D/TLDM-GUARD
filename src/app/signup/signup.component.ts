import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpModel = new UserModel(0 ,'','','','','','')
  constructor( private _signupservice : ProjectService) { }

  ngOnInit() {
  }

  CallToDatabase(){
    console.log(this.signUpModel);
     this._signupservice.PostDataBySignUp(this.signUpModel).subscribe(data => console.log('success'), err => console.log(err))

  }
}
