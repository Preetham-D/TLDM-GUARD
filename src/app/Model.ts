
export class UserModel {
  constructor(
    public UserId: string,
    public FirstName: string,
    public LastName: string,
    public Email: string,
    public Password: string,
    public Designation: string,
    public Workspace: string
  ) { }
}
export class LoginViewModel {
  constructor(
    public UserName: string,
    public Password: string,
  ) { }
}

export class User {
  constructor(
    public id : number,
    public email: string,
    public token : string
  ) { }
}






