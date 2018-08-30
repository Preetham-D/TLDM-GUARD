import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { User } from '../Model';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  emailModel = new User(null ,'','');
  constructor(private _emailservice: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  PostToGmail() {
    console.log("Open Gmail");
    //this._emailservice.postEmail(this.emailModel).subscribe(data => console.log('Success',
      //error => console.log('Error', error)));
    // this.router.navigate(['enterToken']);
    console.log(this.emailModel.email.toString());
    this._emailservice.sendMail(this.emailModel.email).subscribe(data => console.log('success'), err => console.log(err));
  }

  Verify() {
    console.log("enter verification code ")
    this.router.navigate(['/verify']);
  }
}
