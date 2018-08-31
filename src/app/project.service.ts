import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Observable, throwError } from '../../node_modules/rxjs';
import {LoginViewModel, UserModel} from './Model'
import {HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import{TokenParams} from './Classes/TokenParams';
import { headersToString } from 'selenium-webdriver/http';


const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
 };

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private TokenApi: string = "http://172.23.238.206:5000/api/onboard/login";
  private  UsersApi :  string = "http://172.23.238.206:5000/api/users";
  private SignupApi: string = "http://172.23.238.206:5000/api/onboard/signup";
  private _url2: string = "http://172.23.238.162:8000/api/users";
  private _url3: string = "http://172.23.238.162:8000/api/users/verify";

  AccessToken : string = "";
  constructor(public http : HttpClient) { }

  postEmail(email : UserModel ) {
    console.log(email);
    return this.http.post(this._url2, email);
  }

  sendMail(email: any){
    console.log(`"${email}"`);
    return this.http.post(this._url2,email , httpOptions);
  }

  sendOTP(OTP: string){
    console.log("\"email\"");
    return this.http.post(this._url3,`"${OTP}"`, httpOptions);
  }

  login (login : LoginViewModel):Observable<TokenParams>{
    console.log(login);

     return this.http.post<TokenParams>(this.TokenApi, login, httpOptions);
  }

  getUsers() : Observable<UserModel[]>{
     var HeadersForUser = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.AccessToken}`
    });
    console.log(this.AccessToken);
    console.log(HeadersForUser.append('Authorization','Bearer ' + this.AccessToken))
        //HeadersForUser.append('Authorization','Bearer ' + this.AccessToken)

      return this.http.get<UserModel[]>(this.UsersApi, {headers : HeadersForUser});
  }

  PostDataBySignUp(signup : UserModel ){
    return this.http.post(this.SignupApi,signup, httpOptions);
  }
}


