import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private verified = false;
  setStatus(value : boolean){
     this.verified = value
  }
  get ismailSent(){
     this.setStatus
     return this.verified;
  }
  constructor() { }
}
