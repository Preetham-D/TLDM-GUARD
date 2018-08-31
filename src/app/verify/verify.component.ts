import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { User, UserModel } from '../Model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  emailModel = new User('','','');
  constructor(private _emailservice: ProjectService, private router: Router,
  private Auth : AuthService) { }

  ngOnInit() {
  }

  PostToGmail() {
    console.log("Open Gmail");
    var Email = {
      "email": this.emailModel.email
    };

    this._emailservice.sendMail(Email).subscribe(data =>{
      if(data != null){
        this.Auth.setStatus(true)
        this.router.navigate(['/verify'])

      }else {
        window.alert(data.message)
    }
  })
}

  // Verify() {
  //   console.log("enter verification code ")
  //   this.router.navigate(['/verify']);
  // }
}
