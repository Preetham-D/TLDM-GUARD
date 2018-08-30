import { Injectable } from "@angular/core";

@Injectable()
export class TokenParams{
  constructor(
  public token : string ,
  public expiration : string
){}
}
