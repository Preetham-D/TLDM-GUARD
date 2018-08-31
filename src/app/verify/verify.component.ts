import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { User, UserModel } from '../Model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  emailModel = new User('','','');
  constructor(private _emailservice: ProjectService, private router: Router) { }

  // form = new FormGroup({
  //  email : new FormControl('',Validators.required)


  // })


  ngOnInit() {
  }

  PostToGmail() {
    console.log("Open Gmail");
    var Email = {
      "email": this.emailModel.email
    };
    //this._emailservice.postEmail(this.emailModel).subscribe(data => console.log('Success',
      //error => console.log('Error', error)));
    // this.router.navigate(['enterToken']);
    //console.log(this.emailModel.toString());
    this._emailservice.sendMail(Email).subscribe(data => console.log('success'), err => console.log(err));
  }

  Verify() {
    console.log("enter verification code ")
    this.router.navigate(['/verify']);
  }
}
