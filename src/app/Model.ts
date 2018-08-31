
export class UserModel {
  constructor(
    public UserId:number,
    public FirstName: string,
    public LastName: string,
    public Username: string,
    public Password: string,
    public Designation: string,
    public WorkspaceName: string
  ) { }
}
export class LoginViewModel {
  constructor(
    public Username: string,
    public Password: string,
    public WorkspaceName: string
  ) { }
}

export class User {
  constructor(
    // public id : number,
    public email: string,
    public token : string,
    public workspace : string
  ) { }
}






