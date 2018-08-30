import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { User } from '../Model';
@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  OTPmodel = new User(null,'','')
  constructor(private _emailservice: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  RedirectToSignUp(){
    console.log("ToSignup")
    this.router.navigate(['/signup'])
  }

  PostToServer(){
    console.log("Posted To server");
    this._emailservice.sendOTP(this.OTPmodel.token).subscribe(data => console.log('success'), err => console.log(err));

  }

}
